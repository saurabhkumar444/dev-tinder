const express = require("express");
const ConnectDb = require("./config/database");
const app = express();
const User = require("./models/users");

app.post("/signup", async (req, res) => {
  const newUser = new User({
    firstName: "Saurabh",
    lastName: "Maurya",
    email: "Kumar@example.com",
    password: "password123",
    age: 30,
  });
  await newUser.save();
  res.send("User registered successfully");
});

ConnectDb()
  .then(() => {
    console.log("connect db Established");
    app.listen(8080, () => {
      console.log("server listening on 8080");
    });
  })
  .catch((err) => {
    console.error("DB connection error");
  });
