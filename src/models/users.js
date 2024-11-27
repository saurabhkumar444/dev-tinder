const mongoose = require("mongoose");

const users = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  age: { type: Number },
  email: { type: String },
  password: { type: String },
  address: { type: String },
});

const UserModel = mongoose.model("User", users);

module.exports = UserModel;
