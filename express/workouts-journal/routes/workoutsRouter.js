const express = require("express");
const {
  createWorkout,
  allWorkouts,
  workoutById,
} = require("../controllers/workoutController");

const workoutsRouter = express.Router();

workoutsRouter.route("/create").post(createWorkout);
workoutsRouter.route("/").get(allWorkouts);
workoutsRouter.route("/:id").get(workoutById);

module.exports = workoutsRouter;
