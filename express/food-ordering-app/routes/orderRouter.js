const express = require("express");

const {
  addOrder,
  getAllOrders,
  changeOrderStatus,
} = require("../controllers/orderController");
const { protect, allowAccessTo } = require("../controllers/userController");

const orderRouter = express.Router();

orderRouter
  .route("/add")
  .post(protect, allowAccessTo("admin", "user"), addOrder);
orderRouter
  .route("/all")
  .get(protect, allowAccessTo("admin", "user"), getAllOrders);
orderRouter
  .route("/edit/:id/:status")
  .put(protect, allowAccessTo("admin"), changeOrderStatus);
module.exports = orderRouter;
