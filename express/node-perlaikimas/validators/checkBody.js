const { body, ValidationChain } = require("express-validator");

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
    .isLength({ min: 6 })
    .isString()
    .withMessage("string (6+ characters"),

  body("email")
    .trim()
    .notEmpty()
    .isEmail()
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
    .isLength({ min: 6 })
    .isString()
    .withMessage("string (6+ characters)"),
];

exports.checkTaskBody = [
  body("title")
    .notEmpty()
    .isLength({ min: 3, max: 50 })
    .isString()
    .withMessage("Required, 3-50 characters."),

  body("description")
    .isString()
    .isLength({ max: 200 })
    .withMessage("Optional, max 200 characters."),
  body("due_date")
    .isISO8601("yyyy-mm-dd")
    .toDate()
    .withMessage(" Must be in YYYY-MM-DD format."),
  body("priority")
    .isString()
    .isIn(["Low", "Medium", "High"])
    .withMessage(`Must be one of "Low", "Medium", "High".`),
  body("category")
    .isString()
    .notEmpty()
    .isIn(["New", "Old", "Maybe"])
    .withMessage("Required, predefined set of categories."),
  body("status")
    .isString()
    .isIn(["Pending", "Completed"])
    .withMessage(`Must be "Pending" or "Completed".`),
];
