const Product = require("../model/ProductModel");
const User = require("../model/UserModel");

const createProduct = async (req, res) => {
  try {
    const { category, food_name, image, food_text, availability } = req.body;
    const food = { category, food_name, image, food_text, availability };
    const product = await Product.create(food);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    if (req.user.role == "admin") {
      const id = req.params.id;

      const food = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true });

      return res.status(200).json(food);
    }
    res.status(404).send("Not an admin!");
  } catch (error) {
    return res.status(400).send(error);
  }
};

const updateStatus = async (req, res) => {
  try {
    const id = req.params.id;
    const { status } = req.body;

    if (status == "Delivered") {
      const update = await User.findOneAndUpdate({ _id: id }, { status, $set: { haveOrder: false } }, { new: true });
      return res.status(200).json(update);
    }

    const update = await User.findOneAndUpdate({ _id: id }, req.body, { new: true });

    return res.status(200).json(update);
  } catch (error) {
    return console.log(error);
  }
};

module.exports = { createProduct, updateProduct, updateStatus };
