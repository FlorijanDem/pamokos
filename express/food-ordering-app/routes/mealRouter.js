const express = require("express");

const {
  getAllMeals,
  addMeal,
  editMeal,
  removeMeal,
} = require("../controllers/mealController");
const { protect, allowAccessTo } = require("../controllers/userController");

const mealRouter = express.Router();

mealRouter.route("/getall").get(getAllMeals);
mealRouter.route("/add").post(protect, allowAccessTo("admin"), addMeal);
mealRouter.route("/edit/:id").put(protect, allowAccessTo("admin"), editMeal);
mealRouter
  .route("/remove/:id")
  .delete(protect, allowAccessTo("admin"), removeMeal);

module.exports = mealRouter;
