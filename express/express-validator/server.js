const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
app.use(express.json());
const { query } = require("express-validator");

const products = [];

app.post("/addproduct", (req, res) => {
  const { price, category } = req.body;
  const newQuery = {
    price,
    category,
  };
  try {
    const newObject = products.push(newQuery);
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
  }
});


app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
