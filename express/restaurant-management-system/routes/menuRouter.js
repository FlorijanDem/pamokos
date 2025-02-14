const express = require("express");
const {
  createMenuItem,
  getAllMenuItems,
  menuItemById,
  deleteMenuItemById,
  updateMenuItemById
} = require("../controllers/menuController");
const checkUsersParams = require("../validators/checkUsersParams");
const validate = require("../validators/validate")

const menuRouter = express.Router();

menuRouter.route("/").post(createMenuItem);
menuRouter.route("/").get(getAllMenuItems);
menuRouter.route("/:id").get(checkUsersParams, validate, menuItemById);
menuRouter.route("/:id").delete(checkUsersParams, validate, deleteMenuItemById);
menuRouter.route("/:id").put(checkUsersParams, validate, updateMenuItemById)

module.exports = menuRouter;
