const express = require("express");

const {
  addOrder,
  getAllOrders,
  changeOrderStatus,
} = require("../controllers/orderController");

const orderRouter = express.Router();

orderRouter.route("/add").post(addOrder);
orderRouter.route("/all").get(getAllOrders);
orderRouter.route("/edit/:id/:status").put(changeOrderStatus);
module.exports = orderRouter;
