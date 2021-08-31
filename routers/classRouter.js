const router = require("express").Router();
const ClassModel = require("../models/classModel");

router.get("/", async (req, res) => {
  try {
    const classList = await ClassModel.find();
    res.json({ classList, status: 200, mess: "ok" });
  } catch (error) {
    res.json({ error, mess: "server error", status: 500 });
  }
});

module.exports = router;
