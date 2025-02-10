const { query } = require("express-validator");

const checkProductQuery = [
  query("price")
    .optional({ checkFalsy: true })
    .trim()
    .isCurrency({
      allow_negatives: false,
      allow_zero: false,
      digits_after_decimal: [0, 1, 2],
    })
    .withMessage(
      "Price must be a positive number with up to 2 decimal places."
    ),

  query("category")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Category must be a non-empty string."),
];

module.exports = checkProductQuery;
