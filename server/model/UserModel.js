const mongoose = require("mongoose");

const User = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
  },
  orders: [{ type: String }],
  status: {
    type: String,
    enum: ["Preparing", "Delivering", "Delivered"],
  },
  haveOrder: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", User);
