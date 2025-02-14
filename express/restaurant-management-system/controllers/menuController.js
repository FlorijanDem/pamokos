const AppError = require("../utils/appError");
const {
  createMenuItem,
  getAllMenuItems,
  menuItemById,
  deleteMenuItemById,
  updateMenuItemById,
} = require("../models/menuModel");

exports.createMenuItem = async (req, res, next) => {
  const data = req.body;
  try {
    const newItem = await createMenuItem({ data });
    res.status(200).json({
      newItem,
    });
  } catch (err) {
    console.error(err);
  }
};

exports.getAllMenuItems = async (req, res, next) => {
  try {
    const allItems = await getAllMenuItems({});
    res.status(200).json({ allItems });
  } catch (err) {
    console.error(err);
  }
};

exports.menuItemById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const item = await menuItemById({ id });
    res.status(200).json({ item });
  } catch (err) {
    console.error(err);
  }
};

exports.deleteMenuItemById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const item = await deleteMenuItemById({ id });
    res.status(204).json({
      message: "Succes",
    });
  } catch (err) {
    console.error(err);
  }
};

exports.updateMenuItemById = async (req, res, next) => {
  const data = req.body;
  const id = req.params.id;
  try {
    const item = await updateMenuItemById({ data, id });
    res.status(200).json({
      message: "Success",
    });
  } catch (err) {
    console.error(err);
  }
};
