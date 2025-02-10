const express = require("express");
const { register } = require("../controllers/registerController");
const checkRegisterBody = require("../validators/checkRegisterBody");
const validate = require("../validators/validate");

const registerRouter = express.Router();

registerRouter.route("/").post(checkRegisterBody, validate, register);

module.exports = registerRouter;
