const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const api = process.env.API_KEY;
const axios = require("axios");

const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
  max: 200,
  windowMs: 60 * 60 * 1000,
  message: "Too many request from this IP",
});
app.use(limiter);

app.use(express.json());

app.get("/exchange-rates/:base", async (req, res) => {
  const currency = req.params.base;
  try {
    const result = await axios.get(`
            https://v6.exchangerate-api.com/v6/${api}/latest/${currency}
            `);
    const base = result.data.base_code;
    const rates = result.data.conversion_rates;
    res.status(200).json({
      base: base,
      rates: rates,
    });
  } catch (err) {
    console.error(err);
  }
});

app.post("/convert", async (req, res) => {
  const currency = req.body.base;
  const targetCurrency = req.body.target;
  const baseAmount = req.body.amount;
  if (
    currency === undefined ||
    targetCurrency === undefined ||
    baseAmount <= 0
  ) {
    res.status(400).json({
      message: "Bad request",
    });
  }
  try {
    const result = await axios.get(`
                  https://v6.exchangerate-api.com/v6/${api}/latest/${currency}
                  `);
    const rates = result.data.conversion_rates;
    const curse = rates[targetCurrency];
    const convertedAmount = baseAmount * curse;
    res.status(200).json({
      base: currency,
      target: targetCurrency,
      amount: baseAmount,
      convertedAmount: convertedAmount,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
    console.error(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
