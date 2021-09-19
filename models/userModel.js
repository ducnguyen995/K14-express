const mongoose = require("./dbConnect");

const UserSchema = mongoose.Schema(
  {
    username: { type: String },
    password: String,
    age: Number,
    role: String,
    class: { type: String, ref: "class" },
  },
  { collection: "user" }
);

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;

