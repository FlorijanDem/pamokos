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

// exports.checkMealBody = [
//   body("menu_id").trim().notEmpty().isInt().withMessage("Integer only"),
//   body("meal_title").trim().notEmpty().isString().withMessage("String only"),
//   body("description").trim().notEmpty().isString().withMessage("String only"),
//   body("quantity").trim().notEmpty().isInt().withMessage("Integer only"),
// ];

// exports.checkMenuBody = [
//   body("title")
//     .trim()
//     .notEmpty()
//     .isLength({ min: 2 })
//     .isString()
//     .withMessage("string (2+ characters)"),
// ];

// exports.checkOrderBody = [
//   body("user_id").trim().notEmpty().isInt().withMessage("Need enter a user id"),
//   body("meal_id").trim().notEmpty().isInt().withMessage("Need enter a meal id"),
//   body("status")
//     .trim()
//     .notEmpty()
//     .isString()
//     .isLength({ min: 2 })
//     .withMessage("Need enter status"),
// ];

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
  // Latter need to add custom filters
  body("priority")
    .isString()
    .withMessage(`Must be one of "Low", "Medium", "High".`),
  body("category")
    .isString()
    .notEmpty()
    .withMessage("Required, predefined set of categories."),
  body("status").isString().withMessage(`Must be "Pending" or "Completed".`),
];
