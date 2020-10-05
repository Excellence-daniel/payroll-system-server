const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeModel = new Schema({
  employeename: String,
  employeestatus: String,
  employeesalary: Number,
  employeecontract: String,
});

module.exports = mongoose.model("employees", EmployeeModel);
