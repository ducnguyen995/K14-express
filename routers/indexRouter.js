const router = require("express").Router();
const path = require("path");
const UserModel = require("../models/userModel");
const ClassModel = require("../models/classModel");

router.get("/ejs", async (req, res) => {
  try {
    const classList = await ClassModel.find();
    const listUser = await UserModel.find();
    res.render("page/index", {
      string: "<h1>Hello</h1>",
      number: 15,
      listUser,
      classList,
    });
  } catch (error) {
    res.json(error);
  }
});

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../views/home.html"));
});

router.get("/logon", function (req, res) {
  res.sendFile(path.join(__dirname, "../views/logon.html"));
});

router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/login.html"));
});

router.get("/createClass", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/class.html"));
});
module.exports = router;
