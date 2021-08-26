const router = require("express").Router();
const path = require("path");

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../views/home.html"));
});

router.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname, "../view/home.html"));
});
module.exports = router;
