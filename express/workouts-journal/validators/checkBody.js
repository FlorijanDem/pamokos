const { body } = require("express-validator");

exports.checkSignupBody = [
  body("username")
    .trim()
    .notEmpty()
    .isLength({ min: 4 })
    .isString()
    .withMessage("string (4+ characters)"),

  body("password")
    .trim()
    .notEmpty()
    .isLength({ min: 4 })
    .isString()
    .withMessage("string (4+ characters)"),

  body("email").trim().notEmpty().isString().withMessage("string"),
];

exports.checkLoginBody = [
  body("username")
    .trim()
    .notEmpty()
    .isLength({ min: 4 })
    .isString()
    .withMessage("string (4+ characters)"),

  body("password")
    .trim()
    .notEmpty()
    .isLength({ min: 4 })
    .isString()
    .withMessage("string (4+ characters)"),
];
