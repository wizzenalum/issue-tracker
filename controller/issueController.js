const { Project, Issue } = require("../model");

// to creaste teh issue
module.exports.createIssue = async (req, res) => {
  const projectID = req.params.projectID;
  req.body.project = projectID;
  // find the project from collection
  const project = await Project.findById(projectID);
  // handle lable list to create and add labels to project
  let lableList = [];
  let createLableList = (str) => {
    let start = 0;
    let end;
    while (start != str.length) {
      end = str.indexOf(" ", start + 1);
      lableList.push(str.substring(start, end).trim());
      project.label.push(str.substring(start, end));
      start = end + 1;
    }
  };
  // calling the fn to create lable list
  createLableList(req.body["label_list"]);
  // adding labels to Issue created
  const issue = await Issue.create({
    issueName: req.body.issueName,
    issueDescription: req.body.issueDescription,
    project: project.id,
    issueAuthor: req.body.issueAuthor,
    label: lableList,
  });
  project.issues.push(issue.id);
  await project.save();
  return res.redirect(`/projects/${project._id}`);
};
