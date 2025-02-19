const {
  getAllTasks,
  addTask,
  editTask,
  removeTask,
  getOneTask,
} = require("../models/taskModel");
require("dotenv").config();

exports.getAllTasks = async (req, res, next) => {
  console.log(req.user.id);
  const user_id = req.user.id;
  try {
    const tasks = await getAllTasks({ user_id });
    res.status(200).json({
      message: "Success",
      tasks,
    });
  } catch (err) {
    console.error(err);
  }
};

exports.addTask = async (req, res, next) => {
  const user_id = req.user.id;

  const data = req.body;
  try {
    const tasks = await addTask({
      data,
      user_id,
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
  const user_id = req.user.id;
  let message;
  try {
    const task = await editTask({
      id,
      data,
      user_id,
    });
    if (task === undefined) {
      message = "You do not have permision";
    } else {
      message = "Success";
    }
    res.status(200).json({
      message: message,
      task: task,
    });
  } catch (err) {
    console.error(err);
  }
};

exports.removeTask = async (req, res, next) => {
  const id = req.params.id;
  const user_id = req.user.id;
  try {
    const task = await removeTask({
      id,
      user_id,
    });
    res.status(204).json({});
  } catch (err) {
    console.error(err);
  }
};

exports.getOneTask = async (req, res, next) => {
  const id = req.params.id;
  const user_id = req.user.id;
  try {
    const task = await getOneTask({ id, user_id });
    res.status(200).json({
      message: "Success",
      task: task,
    });
  } catch (err) {
    console.error(err);
  }
};
