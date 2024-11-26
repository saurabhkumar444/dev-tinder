const userAuth = (req, res, next) => {
  const authToken = "xyz";
  console.log("User Auth checked token: " + authToken);
  if (authToken !== "xyz") {
    res.status(401).send("Unauthrazed Token!!");
  } else {
    next();
  }
};

const fileAuth = (req, res, next) => {
  const authToken = "xyz";
  console.log("File checked token: " + authToken);
  if (authToken !== "xyz") {
    res.status(401).send("Unauthrazed Token!!");
  } else {
    next();
  }
};
module.exports = {
  userAuth,
  fileAuth,
};
