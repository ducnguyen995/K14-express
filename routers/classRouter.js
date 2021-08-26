const router = require("express").Router();

router.get("/", function (req, res) {
  res.json("day la class router");
});

module.exports = router;
