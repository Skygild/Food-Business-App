const express = require("express");
const adminRoute = express.Router();
const { createProduct, updateProduct, updateStatus } = require("../controllers/adminController");

adminRoute.route("/product").post(createProduct);
adminRoute.route("/product/:id").patch(updateProduct);
adminRoute.route("/change-status/:id").patch(updateStatus);

module.exports = adminRoute;
