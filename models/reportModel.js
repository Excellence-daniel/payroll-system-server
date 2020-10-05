const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReportsModel = new Schema({
  projectname: String,
  projectstatus: String,
  assignedto: String,
  timeline: String,
  approved: Boolean,
});

module.exports = mongoose.model("reports", ReportsModel);
