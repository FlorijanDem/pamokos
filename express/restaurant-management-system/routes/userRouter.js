const express = require("express");
const {
  createUser,
  getAllUsers,
  getById,
  deleteById,
} = require("../controllers/userController");

const userRouter = express.Router();

userRouter.route("/").post(createUser);
userRouter.route("/").get(getAllUsers);
userRouter.route("/:id").get(getById);
userRouter.route("/:id").delete(deleteById);

module.exports = userRouter;
