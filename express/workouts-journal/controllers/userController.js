const AppError = require("../utils/appError");
const jwt = require("jsonwebtoken");
const {
  createUser,
  loginUser,
  getUserById,
  getAllUsers,
  getUserByName,
  addWorkoutToUser,
  usersWorkouts,
} = require("../models/userModel");

const signToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  return token;
};

const sendCookie = (token, res) => {
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.cookie("jwt", token, cookieOptions);
};

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
    const token = signToken(user.id);
    sendCookie(token, res);
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

exports.getUserByName = async (req, res, next) => {
  const username = req.params.username;

  try {
    const user = await getUserByName(username);

    user.password = undefined;

    res.status(200).json({
      user,
    });
  } catch (err) {
    next(err);
  }
};

exports.addWorkoutToUser = async (req, res, next) => {
  const newWorkout = req.body;

  try {
    const workout = await addWorkoutToUser({
      ...newWorkout,
    });
    res.status(200).json({
      status: "success",
      workout,
    });
  } catch (err) {
    next(err);
  }
};

exports.usersWorkouts = async (req, res, next) => {
  const id = req.params.id;
  try {
    const workouts = await usersWorkouts({
      id,
    });
    res.status(200).json({
      status: "success",
      workouts,
    });
  } catch (err) {
    next(err);
  }
};
