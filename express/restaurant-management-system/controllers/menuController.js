const AppError = require("../utils/appError");
const { createMenuItem, getAllMenuItems } = require("../models/menuModel");

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
