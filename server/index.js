//Initialization of packages
const express = require("express");
const app = express();
require("dotenv").config();
const passport = require("passport");
const connecDB = require("./db/connectDB");
const { passportConfig } = require("./config/passportConfig");
const userRouter = require("./routes/userRoutes");
const session = require("express-session");
const { checkAdmin, checkAuth } = require("./authentication/auth");
const adminRoute = require("./routes/adminRoutes");
const authUsersRoutes = require("./routes/authUsersRoutes");

//express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
passportConfig(passport);
app.use(passport.session());

app.use("/user", userRouter);
app.use("/admin", checkAdmin, adminRoute);
app.use("/home", checkAuth, authUsersRoutes);

app.get("/home", async (req, res) => {
  try {
    return res.status(200).send("Welcome to home page. Order Now!");
  } catch (error) {
    return console.log(error);
  }
});

//Start server
app.listen(process.env.PORT, () => {
  console.log(`Connected to ${process.env.PORT}`);
});
// Connect to Database
connecDB(process.env.URI);
