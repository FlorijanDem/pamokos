const { param } = require("express-validator");

const check = [
  param("id").isInt().withMessage("Is not interger"),
  param("orderId").isInt().withMessage("Is not interger"),
  param("userId").isInt().withMessage("Is not interger"),
];

module.exports = check;
