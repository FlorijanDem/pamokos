const { body } = require("express-validator");

exports.checkSignupBody = [
  body("username")
    .trim()
    .notEmpty()
    .isLength({ min: 4 })
    .isString()
    .withMessage("string (4+ characters"),

  body("password")
    .trim()
    .notEmpty()
    .isLength({ min: 4 })
    .isString()
    .withMessage("string (4+ characters"),

  body("email")
    .trim()
    .notEmpty()
    .isString()
    .withMessage("Need insert email inside string"),
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

exports.checkMealBody = [
  body("menu_id").trim().notEmpty().isInt().withMessage("Integer only"),
  body("meal_title").trim().notEmpty().isString().withMessage("String only"),
  body("description").trim().notEmpty().isString().withMessage("String only"),
  body("quantity").trim().notEmpty().isInt().withMessage("Integer only"),
];

exports.checkMenuBody = [
  body("title")
    .trim()
    .notEmpty()
    .isLength({ min: 2 })
    .isString()
    .withMessage("string (2+ characters)"),
];

exports.checkOrderBody = [
  body("user_id").trim().notEmpty().isInt().withMessage("Need enter a user id"),
  body("meal_id").trim().notEmpty().isInt().withMessage("Need enter a meal id"),
  body("status")
    .trim()
    .notEmpty()
    .isString()
    .isLength({ min: 2 })
    .withMessage("Need enter status"),
];
