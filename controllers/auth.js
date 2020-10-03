const userModel = require("../models/userModel");
const Crypt = require("krypter");
const crypt = new Crypt();

module.exports = {
  login: async (request, response) => {
    try {
      const { email, password } = request.query;
      const user = await userModel.findOne({ email });
      if (user) {
        const gottenPassword = user.password;
        if (
          password !==
          crypt.decrypt(
            gottenPassword.encryptedData,
            gottenPassword.key,
            gottenPassword.iv
          )
        ) {
          return response.status(400).send({ message: "Wrong Password" });
        }
        return response.status(200).send({ user });
      }
      return response.status(404).send({ message: "Cannot find user" });
    } catch (e) {
      return response.status(500).send({ message: "Error fetching user" });
    }
  },

  register: async (request, response) => {
    const checkIfUserExists = await userModel.findOne({
      email: request.body.email,
    });
    if (checkIfUserExists) {
      return response.status(403).send("user with this email already exists");
    }
    console.log(request.body);

    request.body.password = crypt.encrypt(request.body.password);
    const user = await userModel(request.body);
    user.save((err, user) => {
      if (err) {
        console.log(err);
        return response.status(500).send(err);
      }
      response.status(200).send({ user });
    });
  },
};
