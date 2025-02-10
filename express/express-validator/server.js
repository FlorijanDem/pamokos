const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
app.use(express.json());
const AppError = require("./utils/appError");

const productsRouter = require("./routes/productsRouter");
const registerRouter = require("./routes/registerRouter");
const usersRouter = require("./routes/usersRouter");

app.use("/products", productsRouter);
app.use("/register", registerRouter);
app.use("/users", usersRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
