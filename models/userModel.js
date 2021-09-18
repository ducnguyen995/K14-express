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

UserModel.create({
  username: "thai",
  password: "hello",
  age: 16,
  role: "user",
})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
