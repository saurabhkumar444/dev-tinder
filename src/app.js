const express = require("express");
const ConnectDb = require("./config/database");
const app = express();
app.use(express.json());
const User = require("./models/users");

app.post("/signup", async (req, res) => {
  console.log("res", req.body);
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    age: req.body.age,
    // ...req.body,
  });
  try {
    await newUser.save();
    res.send("User registered successfully");
  } catch (e) {
    console.log("error", e);
  }
});

app.get("/user", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    res.send(user);
  } catch (e) {
    console.log("error", e);
  }
});

app.get("/userbyId", async (req, res) => {
  try {
    const user = await User.findById({ _id: req.body.id });
    res.send(user);
  } catch (e) {
    console.log("error", e);
  }
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
