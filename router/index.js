const express = require("express");
const router = express.Router();
const homeController = require("../controller/home");

// home page renderring
router.get("/", homeController.home);

//  routes for projects
router.use("/projects", require("./project"));
// router for issues
router.use("/issues", require("./issue"));

module.exports = router;
