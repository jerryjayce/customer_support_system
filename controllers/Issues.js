//utils
const ResponseHelper = require('../helpers/ResponseHelper');
const Agents = require('./Agents')
const {response} = require("express");

//models
const issues = require('../models').issues;
const support_agent_issues = require('../models').support_agent_issues;


class Issues {

    static async create_issue(req, res) {
        try {

            let {
                title,
                description,
                user_id
            } = req.body;

            //TODO verify user id

            let data = {
                title,
                description,
                user_id,
                is_resolved: 0,
                is_assigned: 0
            };


            let created_issue = await issues.create(data);

            //automatically assign issue to next available agent
            if (created_issue) {

                let unassigned_agent = await Agents.get_unassigned_agent();
                let issue_id = created_issue.id;

                if (unassigned_agent.error === false) {
                    let support_agent_id = unassigned_agent.data[0].id;

                    await Agents.assign_issue_to_agent(support_agent_id, issue_id, user_id)
                    await issues.update({is_assigned: 1}, {
                        where: {
                            id: issue_id
                        },
                    })

                    ResponseHelper.sendResponse(res, 201, [created_issue], "Issue created successfully and has been assigned to an agent");

                } else {
                    ResponseHelper.sendResponse(res, 201, [created_issue], "Issue created successfully and will be assigned to the next available agent");

                }
            } else {
            }


        } catch (e) {
            console.log(e);
        }
    }

    static async get_unassigned_issue() {
        try {

            let response = {
                error: true,
                message: "",
                data: []
            }
            let available_issue = await issues.findOne({
                where: {
                    is_resolved: 0,
                    is_assigned: 0
                },
                order: [
                    ['createdAt', 'ASC']
                ]
            });

            if (!available_issue) {
                response.message = "No issue available at the moment";
                return response;
            }

            response.error = false;
            response.message = "Issue available";
            response.data.push(available_issue)
            return response;

        } catch (e) {
            console.log(e);
        }
    }

    static async close_issue(req, res) {
        try {

            let {
                issue_id
            } = req.body;

            let issue = await issues.findOne({
                where: {
                    id: issue_id,
                }
            });

            if (!issue) {
                return ResponseHelper.sendResponse(res, 201, [], "Issue not found");
            }
            if (issue.is_resolved === 1) {
                return ResponseHelper.sendResponse(res, 201, [], "Issue already resolved");
            }

            issue.is_resolved = 1;
            let agent_issue = await support_agent_issues.findOne({where: {issue_id}});

            await Agents.toggle_agent_availability(agent_issue.support_agent_id);
            await issue.save();


            // assign unresolved/unassigned issue to next available agent
            let unassigned_agent = await Agents.get_unassigned_agent();
            let unassigned_issues = await Issues.get_unassigned_issue();


            if (unassigned_agent.error === false && unassigned_issues.error === false) {
                let support_agent_id = unassigned_agent.data[0].id;
                let new_issue_id = unassigned_issues.data[0].id;
                let user_id = unassigned_issues.data[0].user_id;


                await Agents.assign_issue_to_agent(support_agent_id, new_issue_id, user_id);
                await issues.update({is_assigned: 1}, {
                    where: {
                        id: new_issue_id
                    },
                })
                return ResponseHelper.sendResponse(res, 200, [], "Issue closed successfully, next issue assigned to available agent");

            } else {
                return ResponseHelper.sendResponse(res, 200, [], "Issue closed successfully");
            }


        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = Issues;
