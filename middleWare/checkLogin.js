const UserModel = require("../models/userModel");
const BlackListModel = require("../models/blackListModel");
const jwt = require("jsonwebtoken");

async function checkLogin(req, res, next) {
  try {
    if (req.cookies.user) {
      const token = req.cookies.user;
      const checkToken = await BlackListModel.findOne({ token });
      if (checkToken) {
        res.json({ mess: "cookie bị hạn chế", status: 400 });
      } else {
        const id = jwt.verify(token, "thai").id;
        const checkUser = await UserModel.findOne({ _id: id });
        if (checkUser) {
          next();
        } else {
          res.json({ mess: "cookie khong hop le", status: 400 });
        }
      }
    } else {
      res.json({ mess: "chua dang nhap", status: 400 });
    }
  } catch (error) {
    res.json({ error, mess: "server error", status: 500 });
  }
}

module.exports = checkLogin;
