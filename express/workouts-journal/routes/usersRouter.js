const express = require("express");
const { getAllUsers, getUserById} = require("../controllers/userController")

const usersRouter = express.Router();


usersRouter.route("/").get(getAllUsers);
usersRouter.route("/:id").get(getUserById);
module.exports = usersRouter;
