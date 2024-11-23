const express = require("express");
console.log("start new session");

const app = express();

app.use("/file", (req, res) => {
  res.send("code is running in '/file' path");
});

app.use("/", (req, res) => {
  res.send("code is running in '/' path");
});

app.listen(8080, () => {
  console.log("server listening on 8080");
});
