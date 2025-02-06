const AppError = require("../utils/appError");
const { createWorkout, allWorkouts, workoutById } = require("../models/workoutModel");

exports.createWorkout = async (req, res, next) => {
  try {
    const newWorkout = req.body;

    const workout = await createWorkout({
      ...newWorkout,
    });

    res.status(201).json({
      status: "success",
      data: workout,
    });
  } catch (err) {
    next(err);
  }
};

exports.allWorkouts = async (req, res, next) => {
  try {
    const workouts = await allWorkouts({});
    res.status(200).json({
        status: "success",
        data: workouts,
    })
  } catch (err) {
    next(err);
  }
};

exports.workoutById = async (req, res, next) => {
    try {
        const workoutId = req.params.id;
        const workout = await workoutById(workoutId)

        res.status(200).json({
            status: "success",
            data: workout,
        })
    } catch (err) {
        next(err)
    }
}