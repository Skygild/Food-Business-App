//Initialization of packages
const express = require("express");
const app = express();
require("dotenv").config();
const passport = require("passport");
const connecDB = require("./db/connectDB");
const { passportConfig } = require("./config/passportConfig");
const userRouter = require("./routes/userRoutes");
const session = require("express-session");

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

//Start server
app.listen(process.env.PORT, () => {
  console.log(`Connected to ${process.env.PORT}`);
});
// Connect to Database
connecDB(process.env.URI);
