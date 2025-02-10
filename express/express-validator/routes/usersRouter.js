const express = require("express");
const { user } = require("../controllers/usersController");
const checkUsersParams = require("../validators/checkUsersParams");
const validate = require("../validators/validate");

const usersRouter = express.Router();

usersRouter.route("/:id").get(checkUsersParams, validate, user);

module.exports = usersRouter;
