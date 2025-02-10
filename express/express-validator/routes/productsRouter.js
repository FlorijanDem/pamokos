const express = require("express");
const { products } = require("../controllers/productsController");
const checkProductQuery = require("../validators/checkProductQuery");
const validate = require("../validators/validate");

const productsRouter = express.Router();

productsRouter.route("/").get(checkProductQuery, validate, products);

module.exports = productsRouter;
