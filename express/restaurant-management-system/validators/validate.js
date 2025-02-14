const { validationResult } = require("express-validator");
const AppError = require("../utils/appError");

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errStr = errors
      .array()
      .map((err) => err.msg)
      .join("; ");

    next(new AppError(errStr));
  }
  next();
};

module.exports = validate;
