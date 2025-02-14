const AppError = require("../utils/appError");
const { createUser } = require("../models/userModel");

exports.createUser = async (req, res, next) => {
  const data = req.body;
  try {
    const newUser = await createUser({ data });
    res.status(200).json({ newUser });
  } catch (err) {
    console.error(err);
  }
};
