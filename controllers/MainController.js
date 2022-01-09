const Issues = require('./Issues')
const Agents = require('./Agents')
const ResponseHelper = require('../helpers/ResponseHelper');


class MainController {

    static async create_issue(req, res) {
        try {

            ResponseHelper.sendResponse(res, 200, []);


        } catch (e) {
            console.log(e);
        }
    }

    static async close_issue(req, res) {
        try {

            ResponseHelper.sendResponse(res, 200, []);


        } catch (e) {
            console.log(e);
        }
    }

}

module.exports = MainController;
