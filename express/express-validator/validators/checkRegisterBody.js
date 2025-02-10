const { body } = require("express-validator");

const checkProductQuery = [
  body("age")
    .optional({ checkFalsy: true })
    .trim()
    .isCurrency({
      allow_negatives: false,
      allow_zero: false,
      digits_after_decimal: [0],
    })
    .withMessage("Age only."),

  body("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Min password length 8."),

  body("email").trim().isEmail().withMessage("Email only"),
];

module.exports = checkProductQuery;
