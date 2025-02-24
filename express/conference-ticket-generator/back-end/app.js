const express = require("express");
const cors = require('cors');

const errorHandler = require("./middleware/errorHandler");
const AppError = require("./utils/appError");
const userRouter = require("./routes/userRouter");

const app = express();
app.use(cors())
app.use(express.json());

const corsOptions ={
  origin: "http://localhost:5174",
  method: ["GET", "POST"]
}
app.use(cors(corsOptions))

app.use("/users", userRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorHandler);
module.exports = app;
