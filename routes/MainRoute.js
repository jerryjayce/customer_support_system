const express = require("express");
const router = express.Router();

//data validators
let {create_issue, close_issue} = require("../middlewares/formValidator");

//controllers
const IssuesController = require('../controllers/Issues');

//issues route
router.post('/issues/create', [create_issue], IssuesController.create_issue);
router.put('/issues/close', [close_issue], IssuesController.close_issue);


module.exports = router;