const router = require("express").Router();
const UserModel = require("../models/userModel");

router.get("/", function (req, res) {
  UserModel.find()
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
});

router.get("/:id", function (req, res) {
  UserModel.findOne({ _id: req.params.id })
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
});

router.post("/", function (req, res) {
  UserModel.create({ username: "Thai23", password: "123", age: 13 })
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
});

router.put("/:id", function (req, res) {
  UserModel.updateOne({ username: "Thai" }, { password: "thai123" })
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
});

module.exports = router;
