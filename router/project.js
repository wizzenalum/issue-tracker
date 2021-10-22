const express = require("express");
const router = express.Router();
const projectController = require("../controller/project_controller");
// create new Projects
router.post("/create-project/", projectController.createProject);
router.post("/filter-issues", projectController.filterIssues);
router.post("/search-query", projectController.searchIssues);
// view an existing project
// need to make this a little more unique otherwise it leads to error
router.get("/:id", projectController.viewProject);

module.exports = router;
