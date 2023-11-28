const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
// dataBase Creation
mongoose.connect("mongodb://127.0.0.1:27017/authtication");

// Schema matlab appko ye btana banne waala har document mein kya kya hoga

// const userSchema = mongoose.Schema({
//   username: String,
//   name: String,
//   age: Number,
//   description: {
//     type: Array,
//     default: [],
//   },
//   dateCreated: {
//     type: Date,
//     default: Date.now(),

//   },
// });
const userSchema = mongoose.Schema({
  username: String,
  password: String,
  secret: String,
});
userSchema.plugin(passportLocalMongoose);
//collection
module.exports = mongoose.model("user", userSchema);
