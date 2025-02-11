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

exports.protect = async (req, res, next) => {
  try {
    let token = req.cookies?.jwt;
    console.log(token);

    if (!token) {
      throw new AppError(
        "You are not logged in! Please log in to get access",
        401
      );
    }

    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET,
        (err, authorizedData) => {
          if (err) {
            //If error send Forbidden (403)
            console.log("ERROR: Could not connect to the protected route");
            res.sendStatus(403);
          } else {
            //If token is successfully verified, we can send the autorized data
            res.json({
              message: "Successful log in",
              authorizedData,
            });
            console.log("SUCCESS: Connected to protected route");
          }
        }
      );
      const currentUser = await getUserById(decoded.id);

      if (!currentUser) {
        throw new AppError(
          "The user belonging to this token does no longer exist.",
          401
        );
      }

      req.user = currentUser;
      next();
    } catch (err) {
      next(err);
    }
  } catch (err) {
    next(err);
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
    } catch (err) {
      next(err);
    }
  };
};
