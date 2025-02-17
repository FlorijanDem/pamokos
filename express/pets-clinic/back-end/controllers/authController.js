const jwt = require("jsonwebtoken");
const {
  createUser,
  getUserById,
  getUserByEmail,
} = require("../models/userModel");
const AppError = require("../utils/appError");
const { capitalise } = require("../utils/capitalise");

const argon2 = require("argon2");

const signToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    algorithm: "HS256",
  });

  return token;
};


const sendTokenCookie = (token, res) => {
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.cookie("jwt", token, cookieOptions);
};

exports.signup = async (req, res, next) => {
  try {
    const newUser = req.body;
    newUser.role = "user";

    const hash = await argon2.hash(newUser.password);
    newUser.password = hash;

    const createdUser = await createUser(newUser);

    if (!createdUser) {
      throw new AppError("User not created", 400);
    }

    const token = signToken(createdUser.id);

    sendTokenCookie(token, res);

    createdUser.password = undefined;
    createdUser.id = undefined;
    createdUser.first_name = capitalise(createdUser.first_name);
    createdUser.last_name = capitalise(createdUser.last_name);

    res.status(201).json({
      status: "success",
      data: createdUser,
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await getUserByEmail(email);

    const token = signToken(user.id);
    sendTokenCookie(token, res);

    user.password = undefined;
    user.id = undefined;
    user.first_name = capitalise(user.first_name);
    user.last_name = capitalise(user.last_name);

    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};


exports.protect = async (req, res, next) => {
  try {
    let token = req.cookies?.jwt;

    if (!token) {
      throw new AppError(
        "You are not logged in! Please log in to get access.",
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
    } catch (error) {
      next(error);
    }
  };
};

exports.logout = (req, res) => {
  return res
    .clearCookie("jwt")
    .status(200)
    .json({ message: "You're now logged out." });
};

exports.getAuthenticatedUser = (req, res, next) => {
  try {
    const authUser = req.user;
    authUser.password = undefined;
    authUser.id = undefined;
    authUser.first_name = capitalise(authUser.first_name);
    authUser.last_name = capitalise(authUser.last_name);
    authUser.pets.forEach((pet) => {
      pet.name = capitalise(pet.name);
    });

    res.status(200).json({
      status: "success",
      data: authUser,
    });
  } catch (error) {
    next(error);
  }
};
