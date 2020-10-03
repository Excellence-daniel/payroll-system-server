const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uuid = require("uuid").v4();

const UserModel = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: { iv: String, key: String, encryptedData: String },
  phoneNumber: String,
  token: { default: uuid, type: String },
});

module.exports = mongoose.model("users", UserModel);
