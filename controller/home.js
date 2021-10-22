const { Issue, Project } = require("../model");

module.exports.home = async (req, res) => {
  const projects = await Project.find({});
  let issueCount = await Issue.countDocuments();
  const context = {
    projects: projects,
    issueCount: issueCount,
  };
  return res.render("home", context);
};
