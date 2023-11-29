var express = require("express");
var router = express.Router();
const userModel = require("./users");
const classUsers = require("./userNewDB");
const passport = require("passport");
const localStrategy = require("passport-local");

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

// router.get("/", function (req, res) {
//   res.cookie("age", 25);
//   res.render("index");
// });
// router.get("/read", function (req, res) {
//   console.log(req.cookies);
//   res.send("check");
// });

// router.get("/delete", function (req, res) {
//   res.clearCookie("age");
//   res.send("clear hogi");
// });
// router.get("/create", async function (req, res) {
//   const user = await userModel.create({
//     username: "SaadBaba",
//     name: "khan",
//     age: 2,
//     description: ["Js2", "js3"],
//   });
//   res.send(user);
// });
// router.post("/CreateClass", async function (req, res) {
//   const user = await classUsers.create(req.body);
//   res.send(user);
// });
// router.get("/find", async function (req, res) {
//   let regex = new RegExp("^saadbaba$", "i");
//   let user = await classUsers.find({ category: { $all: ["fashion", "food"] } });
//   res.send(user);
// });
// router.get("/find", async function (req, res) {
//   let regex = new RegExp("^saadbaba$", "i");
//   var date1 = new Date("2023-11-02");
//   var date2 = new Date("2023-11-16");
//   let user = await classUsers.find({
//     dateCreated: { $gte: date1, $lte: date2 },
//   });
//   res.send(user);
// });
// router.get("/find", async function (req, res) {
//   let regex = new RegExp("^saadbaba$", "i");
//   let user = await classUsers.find({ category: { $exists: true } });
//   res.send(user);
// });
// router.get("/find", async function (req, res) {
//   let regex = new RegExp("^saadbaba$", "i");
//   let user = await classUsers.find({
//     $expr: {
//       $and: [
//         { $gte: [{ $strLenCP: "$username" }, 0] },
//         { $lte: [{ $strLenCP: "$username" }, 5] },
//       ],
//     },
//   });
//   res.send(user);
// });
passport.use(new localStrategy(userModel.authenticate()));
router.get("/", function (req, res) {
  const messages = req.flash();
  res.render("index", { messages });
});
router.get("/profile", isLoggedIn, function (req, res) {
  res.render("profile");
});
router.post("/register", function (req, res) {
  var userdata = new userModel({
    username: req.body.username,
    secret: req.body.secret,
  });
  userModel.register(userdata, req.body.password).then(function (registration) {
    passport.authenticate("local")(req, res, function () {
      res.redirect("/profile");
    });
  });
});
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/",
    failureFlash: true,
  }),
  function (req, res) {}
);
router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}
module.exports = router;
