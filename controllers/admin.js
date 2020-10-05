const employeeModel = require("../models/employeeModel");
const reportModel = require("../models/reportModel");

module.exports = {
  createEmployee: async (request, response) => {
    try {
      const employee = await employeeModel.create(request.body);
      return response.status(200).send({ employee });
    } catch (e) {
      return response.status(500).send({ message: "Error creating employee" });
    }
  },
  getEmployees: async (request, response) => {
    try {
      const employees = await employeeModel.find();
      return response.status(200).send({ employees });
    } catch (e) {
      return response.status(500).send({ message: "Error fetching employees" });
    }
  },
  createReport: async (request, response) => {
    try {
      const report = await reportModel.create(request.body);
      return response.status(200).send({ report });
    } catch (e) {
      console.log(e);
      return response.status(500).send({ message: "Error creating report" });
    }
  },
  getReports: async (request, response) => {
    try {
      const reports = await reportModel.find();
      return response.status(200).send({ reports });
    } catch (e) {
      return response.status(500).send({ message: "Error fetching reports" });
    }
  },
};
