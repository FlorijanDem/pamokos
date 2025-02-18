const express = require("express");
const { createUser, loginUser } = require("../controllers/userController");
const validate = require("../validators/validate");
const { checkLoginBody, checkSignupBody } = require("../validators/checkBody");

const authRouter = express.Router();

authRouter.route("/register").post(checkSignupBody, validate, createUser);
authRouter.route("/login").post(checkLoginBody, validate, loginUser);

module.exports = authRouter;
