const express = require("express");
console.log("start new session");

const app = express();

app.get("/user", (req, res) => {
  res.send({ firstName: "John", lastName: "Maura" });
});

app.post("/user", (req, res) => {
  res.send("post api hit successfully");
});

app.use("/file", (req, res) => {
  res.send("code is running in '/file' path");
});

app.listen(8080, () => {
  console.log("server listening on 8080");
});
