const express = require("express");
console.log("start new session");

const app = express();

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

app.post("/user", (req, res) => {
  res.send("post api hit successfully");
});

app.use(
  "/file",
  (req, res, next) => {
    next();
    // res.send("code 1");
  },
  [
    (req, res, next) => {
      next();
      // res.send("code 2");
    },
    (req, res, next) => {
      res.send("code 3");
      // next();
    },
  ]
);

app.listen(8080, () => {
  console.log("server listening on 8080");
});
