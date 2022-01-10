
const express = require("express");
const router = express.Router();

const MainController = require('../controllers/MainController');
const IssuesController = require('../controllers/Issues');

//issues
router.post('/issues/create', IssuesController.create_issue);
router.put('/issues/close', IssuesController.close_issue);


//agent


module.exports = router;