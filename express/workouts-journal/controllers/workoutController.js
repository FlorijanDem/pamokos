const AppError = require("../utils/appError");
const {
  createWorkout,
  allWorkouts,
  workoutById,
  editWorkout,
  deleteWorkout,
} = require("../models/workoutModel");

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
    });
  } catch (err) {
    next(err);
  }
};

exports.workoutById = async (req, res, next) => {
  try {
    const workoutId = req.params.id;
    const workout = await workoutById(workoutId);

    res.status(200).json({
      status: "success",
      data: workout,
    });
  } catch (err) {
    next(err);
  }
};

exports.editWorkout = async (req, res, next) => {
  try {
    const name = req.body.name;
    const workoutId = req.params.id;
    const workout = await editWorkout(workoutId, name);

    res.status(200).json({
      status: 1,
      workout,
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteWorkout = async (req, res, next) => {
  try {
    const workoutId = req.params.id;
    const workout = await deleteWorkout(workoutId);
    // With status code 204 you cannot transfer a data, change to 200
    // if you want to see message
    res.status(204).json({
      message: "The selected workout was removed",
      workout,
    });
  } catch (err) {
    next(err);
  }
};
