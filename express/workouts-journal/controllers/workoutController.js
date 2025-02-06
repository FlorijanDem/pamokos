const AppError = require("../utils/appError");
const {createWorkout} = require("../models/workoutModel")

exports.createWorkout = async (req, res, next) => {
    try {
        const newWorkout = req.body;

        const workout = await createWorkout ({
            ...newWorkout,
        })

        res.status(201).json({
            status: "success",
            data: workout,
          });
    } catch (err) {
        next(err)
    }
}