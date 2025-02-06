const express = require("express");
const {
  createUser,
  loginUser,
  getAllUsers,
  getUserById,
} = require("../controllers/userController");

const authRouter = express.Router();

authRouter.route("/register").post(createUser);
authRouter.route("/login").post(loginUser);

module.exports = authRouter;
