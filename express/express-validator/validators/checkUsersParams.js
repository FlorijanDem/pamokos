const { param } = require("express-validator");

const check = [param("id").isInt().withMessage("Is not interger")];

module.exports = check;
