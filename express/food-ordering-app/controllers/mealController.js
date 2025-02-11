const AppError = require("../utils/appError");
const {
  getAllMeals,
  addMeal,
  editMeal,
  removeMeal,
} = require("../models/mealModel");

exports.getAllMeals = async (req, res, next) => {
  try {
    const meals = await getAllMeals({});
    res.status(200).json({
      message: "Success",
      meals,
    });
  } catch (err) {
    console.error(err);
  }
};

exports.addMeal = async (req, res, next) => {
  const data = req.body;
  try {
    const meals = await addMeal({
      data,
    });
    res.status(200).json({
      message: "Success",
      meals: meals,
    });
  } catch (err) {
    console.error(err);
  }
};

exports.editMeal = async (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const meal = await editMeal({
      id,
      data,
    });
    res.status(200).json({
      message: "Success",
      meal: meal,
    });
  } catch (err) {
    console.error(err);
  }
};

exports.removeMeal = async (req, res, next) => {
  const id = req.params.id;
  try {
    const meal = await removeMeal({
      id,
    });
    res.status(200).json({
      message: "Success",
      meal: meal,
    });
  } catch (err) {
    console.error(err);
  }
};
