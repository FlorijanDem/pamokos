const { body } = require("express-validator");

const checkRegisterBody = [
  body("name").isLength({ min: 2 }).withMessage("Min name length 2"),

  body("email").trim().isEmail().withMessage("Email only"),

  body("password").isLength({ min: 8 }).withMessage("Min password length 8"),
];

module.exports = checkRegisterBody;
