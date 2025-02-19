const express = require("express");

const {
  getAllTasks,
  addTask,
  editTask,
  removeTask,
  getOneTask,
} = require("../controllers/tasksController");
const { protect, allowAccessTo } = require("../controllers/userController");

const validate = require("../validators/validate");
const checkId = require("../validators/checkParams");
const { checkTaskBody } = require("../validators/checkBody");
const tasksRouter = express.Router();

tasksRouter.route("/").get(protect, getAllTasks);
tasksRouter.route("/").post(protect, checkTaskBody, validate, addTask);
tasksRouter.route("/:id").put(protect, checkTaskBody, checkId, validate, editTask);
tasksRouter.route("/:id").get(protect, checkId, validate, getOneTask);
tasksRouter.route("/:id").delete(protect, checkId, validate, removeTask);
module.exports = tasksRouter;
