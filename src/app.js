const express = require("express");
const { userAuth, fileAuth } = require("./middleware/auth");
console.log("start new session");

const app = express();

app.use("/user", userAuth);

app.get("/user/:userId?", (req, res) => {
  const requestDetails = {
    headers: req.headers,
    query: req.query,
    path: req.path,
    method: req.method,
    params: req.params,
    body: req.body,
    ip: req.ip,
    userAgent: req.headers["user-agent"],
    hostname: req.hostname,
    originalUrl: req.originalUrl,
  };
  res.send(JSON.stringify(requestDetails));
  //   res.send(res.json(requestDetails));
});

app.post("/user/data", (req, res) => {
  res.send("post api hit successfully");
});

app.post("/file", fileAuth, (req, res) => {
  res.send("file api hit successfully");
});

app.post("/file/login", (req, res) => {
  res.send("Login Api hit successfully");
});

app.listen(8080, () => {
  console.log("server listening on 8080");
});
