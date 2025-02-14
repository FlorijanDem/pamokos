const express = require("express");
const { createMenuItem } = require("../controllers/menuController");

const menuRouter = express.Router();

menuRouter.route("/").post(createMenuItem);

module.exports = menuRouter;
