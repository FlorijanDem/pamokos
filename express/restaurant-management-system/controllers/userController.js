const AppError = require("../utils/appError");
const jwt = require("jsonwebtoken");
const {
  createUser,
  getAllUsers,
  getById,
  deleteById,
  updateByID,
  login,
} = require("../models/userModel");
require("dotenv").config();
const signToken = (id) => {
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

exports.getById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await getById({ id });
    res.status(200).json({ user });
  } catch (err) {
    console.error(err);
  }
};

exports.deleteById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await deleteById({ id });
    res.status(204).json({ user });
  } catch (err) {
    console.error(err);
  }
};

exports.updateByID = async (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const user = await updateByID({ data, id });
    res.status(200).json({ user });
  } catch (err) {
    console.error(err);
  }
};

exports.login = async (req, res, next) => {
  const data = req.body;
  try {
    const user = await login({ data });
    const token = signToken(user[0].id);
    sendCookie(token, res);
    res.status(200).json({ user });
  } catch (err) {
    console.error(err);
  }
};
