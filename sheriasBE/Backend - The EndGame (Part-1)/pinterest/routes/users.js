const mongoose = require("mongoose");

// dataBase Creation
mongoose.connect("mongodb://127.0.0.1:27017/MyFirstDataBase");

// Schema matlab appko ye btana banne waala har document mein kya kya hoga

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
  description: String,
});

//collection
module.exports = mongoose.model("user", userSchema);
