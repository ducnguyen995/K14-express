const router = require("express").Router();
const path = require("path");

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../views/home.html"));
});

router.get("/logon", function (req, res) {
  res.sendFile(path.join(__dirname, "../views/logon.html"));
});

router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/login.html"));
});
module.exports = router;
