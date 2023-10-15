const User = require("../model/UserModel");
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).send("Empty User Information");
    } else if (password.length <= 5) {
      return res.status(401).send("Password length minimum is 5");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { email, password: hashedPassword };
    const create = await User.create(newUser);

    return res.status(200).send(create);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

const logIn = async (email, password, done) => {
  try {
    const user = await User.findOne({ email });

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
