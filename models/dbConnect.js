const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ducnguyen:anhduc1230@cluster0.ts7cd.mongodb.net/TravelBlogs?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

module.exports = mongoose;
