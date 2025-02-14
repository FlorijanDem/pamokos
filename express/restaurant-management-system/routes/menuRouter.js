const express = require("express");
const {
  createMenuItem,
  getAllMenuItems,
  menuItemById,
  deleteMenuItemById,
  updateMenuItemById
} = require("../controllers/menuController");

const menuRouter = express.Router();

menuRouter.route("/").post(createMenuItem);
menuRouter.route("/").get(getAllMenuItems);
menuRouter.route("/:id").get(menuItemById);
menuRouter.route("/:id").delete(deleteMenuItemById);
menuRouter.route("/:id").put(updateMenuItemById)

module.exports = menuRouter;
