const mongoose = require("./dbConnect");

const UserSchema = mongoose.Schema(
  {
    username: { type: String },
    password: String,
    age: Number,
    class: { type: String, ref: "class" },
  },
  { collection: "user" }
);

UserSchema.index({ username: "text" }, { unique: true });

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
