const express = require("express");
const app = express();

require("dotenv").config();
app.use(express.json());

const { sql, testConnection } = require("./dbConnection");
const port = process.env.PORT;
const server = require("./app");
(async () => {
  try {
    await testConnection();

    server.listen(port, () => {
      console.log(`App running on port ${port}`);
    });
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }

  process.on(`SIGINT`, async () => {
    console.log(`Closing database connection...`);
    await sql.end();
    process.exit(0);
  });
})();