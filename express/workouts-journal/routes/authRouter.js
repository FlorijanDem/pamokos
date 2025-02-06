const express = require("express");
const {createUser, loginUser, getAllUsers} = require("../controllers/userController")

const authRouter = express.Router();

authRouter.route("/").get(getAllUsers);
authRouter.route("/register").post(createUser);
authRouter.route("/login").post(loginUser);

module.exports = authRouter;
