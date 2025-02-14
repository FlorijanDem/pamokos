const express = require("express");
const {
  createUser,
  getAllUsers,
  getById,
  deleteById,
  updateByID,
  login,
} = require("../controllers/userController");

const userRouter = express.Router();

userRouter.route("/").post(createUser);
userRouter.route("/").get(getAllUsers);
userRouter.route("/:id").get(getById);
userRouter.route("/:id").delete(deleteById);
userRouter.route("/:id").put(updateByID);
userRouter.route("/login").post(login);

module.exports = userRouter;
