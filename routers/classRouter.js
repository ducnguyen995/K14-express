const router = require("express").Router();
const ClassModel = require("../models/classModel");
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../publics/uploads"));
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ext);
  },
});

const upload = multer({ storage: storage });

router.get("/", async (req, res) => {
  try {
    const classList = await ClassModel.find();
    res.json({ classList, status: 200, mess: "ok" });
  } catch (error) {
    res.json({ error, mess: "server error", status: 500 });
  }
});

router.post("/", upload.single("thumbnail"), async function (req, res, next) {
  try {
    let index = req.file.path.indexOf("uploads");
    let link = "/public/" + req.file.path.slice(index, req.file.path.length);
    const newClass = await ClassModel.create({
      className: req.body.className,
      thumbnail: link,
    });

    res.json({ status: 200, mess: "tạo class thanh cong", newClass });
  } catch (error) {
    res.json({ status: 500, mess: "loi server", error });
  }
});
module.exports = router;
