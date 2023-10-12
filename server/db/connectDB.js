const mongoose = require("mongoose");

const connecDB = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connecDB;
