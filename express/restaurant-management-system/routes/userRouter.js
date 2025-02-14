const express = require("express");
const {
  createUser,
  getAllUsers,
  getById,
  deleteById,
  updateByID,
  login,
} = require("../controllers/userController");
const checkUsersParams = require("../validators/checkUsersParams");
const checkRegisterBody = require("../validators/checkRegisterBody");
const validate = require("../validators/validate");

const userRouter = express.Router();

userRouter.route("/").post(checkRegisterBody, validate, createUser);
userRouter.route("/").get(getAllUsers);
userRouter.route("/:id").get(checkUsersParams, validate, getById);
userRouter.route("/:id").delete(checkUsersParams, validate, deleteById);
userRouter.route("/:id").put(checkUsersParams, validate, updateByID);
userRouter.route("/login").post(login);

module.exports = userRouter;
