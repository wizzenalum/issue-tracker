const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema(
  {
    issueName: {
      type: String,
      required: true,
    },
    issueDescription: {
      type: String,
      default: "This field is Empty",
    },
    project: {
      type: mongoose.Types.ObjectId,
      ref: "Project",
    },
    label: [
      {
        type: String,
      },
    ],
    issueAuthor: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// creator user, project ,status , labels

const Issue = mongoose.model("Issue", issueSchema);
module.exports = Issue;
