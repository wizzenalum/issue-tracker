const mongoose = require("mongoose");
const { mongodb_URI } = require("./environment");
// here we connect the odm(object document maper) mongoose to the dbms mongodb.
mongoose.connect(mongodb_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection; // db store the connection

// cheacking the connection
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("DATABASE connection is Established");
});

// exporting the connection.
module.exports = db;
