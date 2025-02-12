const express = require("express");
const { createUser, getAllUsers } = require("../controllers/userController");

const userRouter = express.Router();

userRouter.route("/").post(createUser);
userRouter.route("/").get(getAllUsers)

module.exports = userRouter;
