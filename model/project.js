const mongoose = require("mongoose");

const { Schema } = mongoose;
const projectSchema = new Schema(
  {
    projectName: {
      type: String,
      required: true,
      unique: true,
    },
    projectDescription: {
      type: String,
      max: 200,
    },
    projectAuthor: {
      type: String,
      required: true,
    },
    label: [
      {
        type: String,
      },
    ],
    issues: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Issue",
      },
    ],
  },
  {
    timestamps: true,
  }
);
projectSchema.virtual("projectLink").get(function () {
  return `/projects/${this.id}`;
});
// members and issues to be added
const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
