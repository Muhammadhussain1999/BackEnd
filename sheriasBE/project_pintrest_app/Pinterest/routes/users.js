const mongoose = require('mongoose');
const plm=require("passport-local-mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/MySetupForPintreset")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
  },
  posts: [{type: mongoose.Schema.Types.ObjectId,
  ref: 'Post'}],
  dp: {
    type: String // Assuming you store the URL or path to the user's profile picture
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  fullname: {
    type: String
  }
});
userSchema.plugin(plm)
module.exports = mongoose.model('User', userSchema);


