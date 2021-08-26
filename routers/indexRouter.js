const router = require("express").Router();
const path = require("path");

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../views/home.html"));
});

router.get("/logon", function (req, res) {
  res.sendFile(path.join(__dirname, "../views/logon.html"));
});
module.exports = router;
