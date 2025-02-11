const express = require("express");

const {
  getAllMeals,
  addMeal,
  editMeal,
  removeMeal,
} = require("../controllers/mealController");

const mealRouter = express.Router();

mealRouter.route("/getall").get(getAllMeals);
mealRouter.route("/add").post(addMeal);
mealRouter.route("/edit/:id").put(editMeal);
mealRouter.route("/remove/:id").delete(removeMeal);

module.exports = mealRouter;
