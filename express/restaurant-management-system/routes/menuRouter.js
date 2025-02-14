const express = require("express");
const {
  createMenuItem,
  getAllMenuItems,
} = require("../controllers/menuController");

const menuRouter = express.Router();

menuRouter.route("/").post(createMenuItem);
menuRouter.route("/").get(getAllMenuItems);

module.exports = menuRouter;
