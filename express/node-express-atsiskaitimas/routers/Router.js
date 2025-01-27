const Router = require("express").Router();
const { getAll, getById, createBook, updateBook, deleteBook } = require("../controllers/bookController");
const checkBody = require("../validators/checkBody");
const validate = require("../validators/validate");

Router.route("/books").get(checkBody, validate, getAll);
Router.route("/books/:id").get(checkBody, validate, getById);
Router.route("/books").post(checkBody, validate, createBook);
Router.route("/books/:id").patch(checkBody, validate, updateBook);
Router.route("/books/:id").delete(checkBody, validate, deleteBook);

module.exports = Router;
