const AppError = require("../utils/appError");

const {
  getAllTasks,
  addTask,
  editTask,
  removeTask,
  getOneTask,
} = require("../models/taskModel");

exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks = await getAllTasks({});
    res.status(200).json({
      message: "Success",
      tasks,
    });
  } catch (err) {
    console.error(err);
  }
};

exports.addTask = async (req, res, next) => {
  const data = req.body;
  try {
    const tasks = await addTask({
      data,
    });
    res.status(200).json({
      message: "Success",
      tasks: tasks,
    });
  } catch (err) {
    console.error(err);
  }
};

exports.editTask = async (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const task = await editTask({
      id,
      data,
    });
    res.status(200).json({
      message: "Success",
      task: task,
    });
  } catch (err) {
    console.error(err);
  }
};

exports.removeTask = async (req, res, next) => {
  const id = req.params.id;
  try {
    const task = await removeTask({
      id,
    });
    res.status(204).json({});
  } catch (err) {
    console.error(err);
  }
};

exports.getOneTask = async (req, res, next) => {
  const id = req.params.id;
  try {
    const task = await getOneTask({ id });
    res.status(200).json({
      message: "Success",
      task: task,
    });
  } catch (err) {
    console.error(err);
  }
};
