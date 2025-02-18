const express = require("express");
const {
  addMenu,
  editMenu,
  removeMenu,
} = require("../controllers/menuController");
const { protect, allowAccessTo } = require("../controllers/userController");
const validate = require("../validators/validate");

const checkId = require("../validators/checkParams");
const { checkMenuBody } = require("../validators/checkBody");
const menuRouter = express.Router();

menuRouter
  .route("/add")
  .post(checkMenuBody, validate, protect, allowAccessTo("admin"), addMenu);
menuRouter
  .route("/edit")
  .put(checkMenuBody, validate, protect, allowAccessTo("admin"), editMenu);
menuRouter
  .route("/remove/:id")
  .delete(checkId, validate, protect, allowAccessTo("admin"), removeMenu);
module.exports = menuRouter;
