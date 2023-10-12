const express = require("express");
const app = express();
require("dotenv").config();
const passport = require("passport");
const connecDB = require("./db/connectDB");

app.listen(process.env.PORT, () => {
  console.log(`Connected to ${process.env.PORT}`);
});

connecDB(process.env.URI);
