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
  UserModel.create({
    username: req.body.username,
    password: req.body.password,
    age: req.body.age,
  })
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
});

router.put("/:id", function (req, res) {
  UserModel.updateOne(
    {
      username: req.body.username,
      _id: req.params.id,
      password: req.body.password,
    },
    { username: req.body.newPass }
  )
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
});

module.exports = router;
