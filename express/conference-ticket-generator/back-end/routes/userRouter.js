const express = require("express");
const { createUser, getUser } = require("../controllers/userController");

const userRouter = express.Router();

userRouter.route("/").get(getUser);
userRouter.route("/").post(createUser);

module.exports = userRouter;
