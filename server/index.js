//Initialization of packages
const express = require("express");
const app = express();
require("dotenv").config();
const passport = require("passport");
const connecDB = require("./db/connectDB");
const passportConfig = require("./config/passportConfig");

//express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passportConfig(passport));

//Start server
app.listen(process.env.PORT, () => {
  console.log(`Connected to ${process.env.PORT}`);
});
// Connect to Database
connecDB(process.env.URI);
