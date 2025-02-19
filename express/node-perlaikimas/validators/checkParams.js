const { param } = require("express-validator");

const checkId = [
  param("id")
    .isInt({ min: 1 })
    .withMessage("Invalid ID format. Must be a positive integer"),
];

module.exports = checkId;
