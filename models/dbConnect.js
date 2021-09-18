const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://thaidd7b:thaidd7b@cluster0.jqh8p.mongodb.net/K14?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

module.exports = mongoose;
