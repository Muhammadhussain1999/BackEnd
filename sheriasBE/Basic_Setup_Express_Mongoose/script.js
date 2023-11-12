// var data = require("./script2");
// console.log(data.data2);

const express = require("express");
const app = express();
const userModel = require("./users");
app.use(function (req, req, next) {
  console.log("hello from middleware");
  next();
});

app.use(function (req, req, next) {
  console.log("hello from middleware2");
  next();
});

app.get("/", function (req, res) {
  res.send(" World");
});
app.get("/profile/:username", function (req, res) {
  res.send(`hello from profile ${req.params.username}`);
});

app.listen(3000);
