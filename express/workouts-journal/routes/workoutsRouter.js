const express = require("express");
const {
  createWorkout,
  allWorkouts,
  workoutById,
  editWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");

const workoutsRouter = express.Router();

workoutsRouter.route("/create").post(createWorkout);
workoutsRouter.route("/").get(allWorkouts);
workoutsRouter.route("/:id").get(workoutById);
workoutsRouter.route("/:id").put(editWorkout)
workoutsRouter.route("/:id").delete(deleteWorkout)

module.exports = workoutsRouter;
