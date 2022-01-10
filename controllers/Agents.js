const {support_agent} = require("../models");
const {support_agent_issues} = require("../models");
const ResponseHelper = require('../helpers/ResponseHelper');


class Agents {


    static async assign_issue_to_agent(support_agent_id, issue_id, user_id) {
        try {

            let response = {
                error: true,
                message: "",
            }

            let data = {
                support_agent_id,
                issue_id,
                user_id,
                is_resolved: 0
            }



            await support_agent_issues.create(data).then(result => {
                if (result) {
                    response.message = "Issue successfully assigned to agent";
                    response.error = false;
                    Agents.toggle_agent_availability(support_agent_id);
                    return response;

                } else {
                    response.message = "No agent available at the moment";
                    return response;
                }
            });
        } catch (e) {
            console.log(e);
        }
    }

    static async get_unassigned_agent() {
        try {

            let response = {
                error: true,
                message: "",
                data: []
            }

            let available_agent = await support_agent.findOne({
                where: {
                    is_available: 1
                },
                order: [
                    ['updatedAt', 'ASC']
                ]
            });

            if (!available_agent) {
                response.message = "No agent available at the moment";
                return response;
            }

            response.error = false;
            response.message = "Agent available";
            response.data.push(available_agent)
            return response;

        } catch (e) {
            console.log(e);
        }
    }

    static async toggle_agent_availability(agent_id) {
        try {

            let agent = await support_agent.findOne({
                where: {
                    id: agent_id
                }
            });

            if (agent) {
                agent.is_available = agent.is_available === 0 ? 1 : 0;
                await agent.save();
            }

        } catch (e) {
            console.log(e);
        }
    }

}

module.exports = Agents;
