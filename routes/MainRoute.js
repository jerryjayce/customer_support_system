
const express = require("express");
const router = express.Router();

const MainController = require('../controllers/MainController');

router.post('/create_issue', MainController.create_issue);
router.put('/close_issue', MainController.close_issue);


module.exports = router;