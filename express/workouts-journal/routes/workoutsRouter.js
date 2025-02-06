const express = require("express");
const {createWorkout} = require("../controllers/workoutController")

const workoutsRouter = express.Router();

workoutsRouter.route("/create").post(createWorkout)

// createWorkout

module.exports = workoutsRouter;
