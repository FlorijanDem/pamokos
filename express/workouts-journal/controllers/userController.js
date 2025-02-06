const AppError = require("../utils/appError");
const {
  createUser,
  loginUser,
  getUserById,
  getAllUsers,
} = require("../models/userModel");

exports.createUser = async (req, res, next) => {
  try {
    const newUser = req.body;

    const user = await createUser({
      ...newUser,
      created_at: new Date(),
      updated_at: new Date(),
    });

    user.id = undefined;
    user.password = undefined;

    res.status(201).json({
      status: "success",
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

exports.loginUser = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await loginUser({
      username,
      password,
    });
    res.status(200).json({
      message: "Success! You are logged in!",
      user,
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await getAllUsers({});
    res.status(200).json({
      users,
    });
  } catch (err) {
    next(err);
  }
};

exports.getUserById = async (req, res, next) => {
  const userId = req.params.id;
  if (!userId || isNaN(userId)) return next();

  try {
    const user = await getUserById(userId);

    if (!user) throw new AppError("User not found", 404);

    user.password = undefined;

    res.status(200).json({
      status: "success",
      user,
    });
  } catch (err) {
    next(err);
  }
};
