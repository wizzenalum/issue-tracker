const express = require("express");
const router = express.Router();
const issueController = require("../controller/issueController");

router.post("/create-issue/:projectID", issueController.createIssue);
module.exports = router;
