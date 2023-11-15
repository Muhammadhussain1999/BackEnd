var express = require("express");
var router = express.Router();
const userModel = require("./users");
/* GET home page. */
// router.get("/", function (req, res, next) {
//   res.send("hello");
// });
// router.get("/create", async function (req, res) {
//   const createdUser = await userModel.create({
//     username: "Muhammad Hussain",
//     name: "Muhammad",
//     age: 23,
//   });
//   res.send(createdUser);
// });
// router.get("/allusers", async function (req, res) {
//   let allusers = await userModel.find({
//     name: "Muhammad",
//   });
//   res.send(allusers);
// });
// router.get("/singalusers", async function (req, res) {
//   let allusers = await userModel.findOne({
//     name: "Muhammad",
//   });
//   res.send(allusers);
// });

// router.get("/", function (req, res) {
//   req.session.banned = true;
//   res.render("index");
// });
// router.get("/checkban", function (req, res) {
//   if (req.session.banned === true) {
//     res.send("you are banned");
//   } else {
//     res.send("not band");
//   }
// });
// router.get("/removeban", function (req, res) {
//   req.session.destroy(function (err) {
//     console.log(err);
//     if (err) throw err;
//     res.send("ban removed");
//   });
// });

router.get("/", function (req, res) {
  res.cookie("age", 25);
  res.render("index");
});
router.get("/read", function (req, res) {
  console.log(req.cookies);
  res.send("check");
});

router.get("/delete", function (req, res) {
  res.clearCookie("age");
  res.send("clear hogi");
});
module.exports = router;
