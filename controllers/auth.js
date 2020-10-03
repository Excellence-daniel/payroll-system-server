const userModel = require("../models/userModel");

module.exports = {
  login: async (request, response) => {
    const { email } = request.query;
    const user = await userModel.findOne({ email });
    console.log({ user });
  },

  register: async (request, response) => {
    const checkIfUserExists = await userModel.findOne({
      email: request.body.email,
    });
    if (checkIfUserExists) {
      return response.status(403).send("user with this email already exists");
    }
    const user = await userModel(request.body);
    user.save((err, User) => {
      if (err) {
        console.log(err);
        return response.status(500).send(err);
      }
      response.status(200).send({ User });
    });
  },
};
