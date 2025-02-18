const express = require("express");

const {
  getAllMeals,
  addMeal,
  editMeal,
  removeMeal,
} = require("../controllers/mealController");
const { protect, allowAccessTo } = require("../controllers/userController");

const validate = require("../validators/validate");

const checkId = require("../validators/checkParams");

const { checkMealBody } = require("../validators/checkBody");
const mealRouter = express.Router();

mealRouter.route("/getall").get(getAllMeals);
mealRouter
  .route("/add")
  .post(checkMealBody, validate, protect, allowAccessTo("admin"), addMeal);
mealRouter
  .route("/edit/:id")
  .put(
    checkId,
    checkMealBody,
    validate,
    protect,
    allowAccessTo("admin"),
    editMeal
  );
mealRouter
  .route("/remove/:id")
  .delete(checkId, validate, protect, allowAccessTo("admin"), removeMeal);

module.exports = mealRouter;
