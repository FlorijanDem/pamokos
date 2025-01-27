const authRouter = require("express").Router();

const { register, login } = require("../controllers/authController");

const {
  checkRegister,
  checkLogin,
} = require("../validators/checkBody");
const validate = require("../validators/validate");

authRouter.route("/register").post(checkRegister, validate, register);
authRouter.route("/login").post(checkLogin, validate, login);

module.exports = authRouter;
