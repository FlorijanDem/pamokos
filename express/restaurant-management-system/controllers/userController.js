const AppError = require("../utils/appError");

const { createUser, getAllUsers } = require("../models/userModel");

exports.createUser = async (req, res, next) => {
  const data = req.body;
  try {
    const newUser = await createUser({
      data,
    });
    res.status(200).json({
      message: "Success",
      newUser,
    });
  } catch (err) {
    console.error(err);
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await getAllUsers({});
    res.status(200).json({
      users,
    });
  } catch (err) {
    console.error(err);
  }
};
