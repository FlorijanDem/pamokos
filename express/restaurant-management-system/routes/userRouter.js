const express = require("express");
const {
  createUser,
  getAllUsers,
  getById,
} = require("../controllers/userController");

const userRouter = express.Router();

userRouter.route("/").post(createUser);
userRouter.route("/").get(getAllUsers);
userRouter.route("/:id").get(getById);

module.exports = userRouter;
