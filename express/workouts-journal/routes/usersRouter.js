const express = require("express");
const {
  getAllUsers,
  getUserById,
  getUserByName,
  addWorkoutToUser,
  usersWorkouts,
} = require("../controllers/userController");

const usersRouter = express.Router();

usersRouter.route("/").get(getAllUsers);
usersRouter.route("/:id").get(getUserById);
usersRouter.route("/:username").get(getUserByName);
usersRouter.route("/:id/workouts").post(addWorkoutToUser);
usersRouter.route("/:id/workouts").get(usersWorkouts)
module.exports = usersRouter;
