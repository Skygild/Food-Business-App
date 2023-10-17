const Product = require("../model/ProductModel");
const User = require("../model/UserModel");

const createProduct = async (req, res) => {
  try {
    const { category, food_name, image, food_text, availability } = req.body;
    const food = { category, food_name, image, food_text, availability };
    const product = await Product.create(food);
    return res.status(200).json(product);
  } catch (error) {
    return console.log(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    if (req.user.role != "admin") {
      const product = { full_name: req.param.full_name };
      const update = req.body;

      const food = await Product.findOneAndUpdate(product, update, { new: true });

      return res.status(200).json(food);
    }
    res.status(404).send("Not an admin!");
  } catch (error) {
    return console.log(error);
  }
};

const updateStatus = async (req, res) => {
  try {
    const id = req.param.id;
    const { status } = req.body;

    if (status == "Delivered") {
      const update = await User.findByIdAndUpdate({ _id: id }, { status, haveOrder: true }, { new: true });
      return res.status(200).json(update);
    }

    const update = await User.findByIdAndUpdate({ _id: id }, status, { new: true });

    return res.status(200).json(update);
  } catch (error) {
    return console.log(error);
  }
};

module.exports = { createProduct, updateProduct, updateStatus };
