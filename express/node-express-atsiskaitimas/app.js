const express = require("express");
const Router = require("./routers/Router");
const errorHandler = require("./middleware/errorHandler");
const AppError = require("./utils/appError");
const app = express();

app.use(express.json());

app.use("/api/v1", Router);
app.use("/api/v1/books", Router);
app.use("/api/v1/authors", Router);
app.use("/api/v1/auth/register", Router);
app.use("/api/v1/login", Router)

app.all("*", (req, res, next) => {
  next(new AppError("Not found", 404));
});

app.use(errorHandler);

module.exports = app;

