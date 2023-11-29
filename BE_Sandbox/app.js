const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("./public"));
app.get("/home/:username", function (req, res) {
  res.render("index", { username: req.params.username });
});
app.get("/new-route", (req, res) => {
  //res.send("This is the new route!");
  res.render("index2", { username: req.params.username });
});
app.get("/error", function (req, res, next) {
  throw new Error("something went worng");
});

app.use(function errorHandler(err, req, res, next) {
  res.status(500);
  res.render("error", { error: err });
});
app.listen(3000);
