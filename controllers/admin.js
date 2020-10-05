const employeeModel = require("../models/employeeModel");

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
};
