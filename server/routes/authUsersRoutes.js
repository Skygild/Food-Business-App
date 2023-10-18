const express = require("express");
const authUsersRoutes = express.Router();
const { userOrder } = require("../controllers/userController");

authUsersRoutes.route("/orders").patch(userOrder);

module.exports = authUsersRoutes;
