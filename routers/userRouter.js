const router = require("express").Router();
const UserModel = require("../models/userModel");

router.get("/", (req, res) => {
  UserModel.find()
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
});

router.get("/pagination", async (req, res) => {
  try {
    if (req.query.class) {
      const data = await UserModel.find({ class: req.query.class })
        .skip((req.query.page - 1) * req.query.size)
        .limit(req.query.size * 1);
      res.json({ data, status: 200, mess: "ok" });
    } else {
      const data = await UserModel.find({})
        .skip((req.query.page - 1) * req.query.size)
        .limit(req.query.size * 1);
      res.json({ data, status: 200, mess: "ok" });
    }
  } catch (error) {
    console.log(error);
    res.json({ error, mess: "server error", status: 500 });
  }
});

router.get("/:id", (req, res) => {
  UserModel.findOne({ _id: req.params.id })
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
});

router.post("/", async (req, res) => {
  try {
    const checkUser = await UserModel.findOne({ username: req.body.username });
    if (checkUser) {
      res.json({ status: 400, mess: "username đã sử dung" });
    } else {
      await UserModel.create({
        username: req.body.username,
        password: req.body.password,
        age: req.body.age,
        class: req.body.class,
      });
      res.json({ status: 200, mess: "tao tk thanh cong" });
    }
  } catch (error) {
    res.json({ status: 500, error, mess: "loi server" });
  }
});

router.put("/:id", (req, res) => {
  UserModel.updateOne(
    {
      username: req.body.username,
      _id: req.params.id,
      password: req.body.password,
    },
    { password: req.body.newPass }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
