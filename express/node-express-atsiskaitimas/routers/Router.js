const Router = require("express").Router();
const { getAll, getById, createBook, updateBook, deleteBook } = require("../controllers/bookController");
const { signToken, sendCookie } = require("../controllers/authController")
const { getAllAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor} = require("../controllers/authorsController")
const checkBody = require("../validators/checkBody");
const validate = require("../validators/validate");

Router.route("/books").get(checkBody, validate, getAll);
Router.route("/books/:id").get(checkBody, validate, getById);
Router.route("/books").post(checkBody, validate, createBook);
Router.route("/books/:id").patch(checkBody, validate, updateBook);
Router.route("/books/:id").delete(checkBody, validate, deleteBook);

Router.route("/authors").get(checkBody, validate, getAllAuthors);
Router.route("/authors/:id").get(checkBody, validate, getAuthorById);
Router.route("/authors").post(checkBody, validate, createAuthor);
Router.route("/authors/:id").patch(checkBody, validate, updateAuthor);
Router.route("/authors/:id").delete(checkBody, validate, deleteAuthor);

module.exports = Router;
