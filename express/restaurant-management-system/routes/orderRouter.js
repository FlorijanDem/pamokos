const express = require("express");
const {
  createOrder,
  getOrdersByUser,
  getOneOrderByUser,
  deleteOneOrderByUser,
} = require("../controllers/orderController");

const orderRouter = express.Router();

orderRouter.route("/").post(createOrder);
orderRouter.route("/user/:userId").get(getOrdersByUser);
orderRouter.route("/:orderId/user/:userId").get(getOneOrderByUser);
orderRouter.route("/:orderId/user/:userId").delete(deleteOneOrderByUser);

module.exports = orderRouter;
