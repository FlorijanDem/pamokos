const express = require("express");

const {
  addOrder,
  getAllOrders,
  changeOrderStatus,
} = require("../controllers/orderController");
const { protect, allowAccessTo } = require("../controllers/userController");

const validate = require("../validators/validate");
// const {checkOrderBody} = require("../validators/checkBody")
const checkId = require("../validators/checkParams");

const orderRouter = express.Router();

orderRouter
  .route("/add")
  .post(protect, allowAccessTo("admin", "user"), addOrder);
orderRouter
  .route("/all")
  .get(protect, allowAccessTo("admin", "user"), getAllOrders);
orderRouter
  .route("/edit/:id/:status")
  .put(checkId, validate, protect, allowAccessTo("admin"), changeOrderStatus);
module.exports = orderRouter;
