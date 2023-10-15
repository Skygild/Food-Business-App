const LocalStrategy = require("passport-local").Strategy;
const { logIn } = require("../controllers/userController");
const User = require("../model/UserModel");

const passportConfig = (passport) => {
  passport.use(new LocalStrategy({ usernameField: "email", passwordField: "password" }, logIn));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  });
};

module.exports = { passportConfig };
