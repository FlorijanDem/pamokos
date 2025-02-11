const AppError = require("../utils/appError");
const { addMenu, editMenu, removeMenu } = require("../models/menuModel");

exports.addMenu = async (req, res, next) => {
  const toAdd = req.body.title;
  console.log(toAdd);
  try {
    const newMenu = await addMenu({
      toAdd,
    });

    res.status(200).json({
      message: "Success",
      newMenu,
    });
  } catch (err) {
    next(err);
  }
};

exports.editMenu = async (req, res, next) => {
  const data = req.body;
  try {
    const editedMenu = await editMenu({
      data,
    });

    res.status(200).json({
      message: "Success",
      editedMenu,
    });
  } catch (err) {
    next(err);
  }
};

exports.removeMenu = async (req, res, next) => {
  const id = req.params.id;
  try {
    const removedMenu = await removeMenu({
      id,
    });

    res.status(204).json({
      message: "Success",
    });
  } catch (err) {
    next(err);
  }
};
