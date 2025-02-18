const express = require("express");
const { createUser, loginUser } = require("../controllers/userController");
const { checkLoginBody, checkSignupBody } = require("../validators/checkBody");

const authRouter = express.Router();

authRouter.route("/register").post(checkSignupBody, createUser);
authRouter.route("/login").post(checkLoginBody, loginUser);

module.exports = authRouter;
