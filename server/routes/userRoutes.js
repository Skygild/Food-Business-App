const express = require("express");
const userRouter = express.Router();
const { signUp } = require("../controllers/userController");
const passport = require("passport");

userRouter.route("/signup").post(signUp);
userRouter.route("/login").post(passport.authenticate("local", { successRedirect: "/home", failureRedirect: "/login" }));

module.exports = userRouter;
