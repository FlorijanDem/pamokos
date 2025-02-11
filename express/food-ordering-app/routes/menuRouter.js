const express = require("express");
const {
  addMenu,
  editMenu,
  removeMenu,
} = require("../controllers/menuController");
const { protect, allowAccessTo } = require("../controllers/userController");

const menuRouter = express.Router();

menuRouter.route("/add").post(
  // protect,
  // allowAccessTo,
  addMenu
);
menuRouter.route("/edit").put(
  // protect,
  // allowAccessTo,
  editMenu
);
menuRouter.route("/remove/:id").delete(
    // protect,
    // allowAccessTo,
    removeMenu
  );
module.exports = menuRouter;
