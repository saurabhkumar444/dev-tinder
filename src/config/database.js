const mongoose = require("mongoose");
require("dotenv").config();
const ConnectDb = async () => {
  await mongoose.connect(process.env.MONGO_URL);
};

module.exports = ConnectDb;
