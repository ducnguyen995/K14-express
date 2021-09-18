const mongoose = require("mongoose");

<<<<<<< HEAD
mongoose.connect("mongodb+srv://ducnguyen:anhduc1230@cluster0.ts7cd.mongodb.net/TravelBlogs?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
=======
mongoose.connect(
  "mongodb+srv://thaidd7b:thaidd7b@cluster0.jqh8p.mongodb.net/K14?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
>>>>>>> 3c8fa2a513b303308da73215e155df7daa64a04b

module.exports = mongoose;
