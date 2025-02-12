const AppError = require("../utils/appError");
const jwt = require("jsonwebtoken");
const {
  createUser,
  loginUser,
  getUserById,
  getAllUsers,
  getUserByName,
} = require("../models/userModel");
require("dotenv").config();

const signToken = (id) => {
  console.log(process.env.JWT_EXPIRES_IN);
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    algorithm: "HS256",
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
    console.log(user.id);
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

exports.protect = async (req, res, next) => {
  try {
    let token = req.cookies?.jwt;

    if (!token) {
      throw new AppError(
        "You are not logged in! Please log in to get accessssss.",
        401
      );
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const currentUser = await getUserById(decoded.id);
    if (!currentUser) {
      throw new AppError(
        "The user belonging to this token does no longer exist.",
        401
      );
    }

    console.log(currentUser);
    req.user = currentUser;
    next();
  } catch (error) {
    next(error);
  }
};

exports.allowAccessTo = (...roles) => {
  return (req, res, next) => {
    try {
      if (!roles.includes(req.user.role)) {
        throw new AppError(
          "You do not have permission to perform this action",
          403
        );
      }
      next();
    } catch (err) {
      next(err);
    }
  };
};
