const User = require("../model/UserModel");
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const securedUser = { email, password: hashedPassword };
    const create = await User.create(securedUser);

    return res.status(201).json({ create });
  } catch (error) {
    return console.log(error);
  }
};

const logIn = async (email, password, done) => {
  try {
    const user = User.findOne({ email });

    if (!user) {
      return done(null, false, { message: "Wrong Email" });
    }

    const unhashedPassword = await bcrypt.compare(password, user.password);
    if (!unhashedPassword) {
      return done(null, false, { message: "Wrong Password" });
    }

    return done(null, user);
  } catch (error) {
    return done(error);
  }
};

module.exports = { signUp, logIn };
