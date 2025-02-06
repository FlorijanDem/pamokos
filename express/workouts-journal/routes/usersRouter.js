const express = require("express");
const { getAllUsers, getUserById, getUserByName} = require("../controllers/userController")

const usersRouter = express.Router();


usersRouter.route("/").get(getAllUsers);
usersRouter.route("/:id").get(getUserById);
usersRouter.route("/:username").get(getUserByName)
module.exports = usersRouter;
