const mongoose = require("./dbConnect");

const UserSchema = mongoose.Schema(
  {
    username: String,
    password: String,
    age: Number,
  },
  { collection: "user" }
);

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
