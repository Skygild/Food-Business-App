const mongoose = require("mongoose");

const Product = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  food_name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  food_text: {
    type: String,
    required: true,
  },
  availability: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Product", Product);
