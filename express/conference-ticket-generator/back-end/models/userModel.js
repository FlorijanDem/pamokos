const { sql } = require("../dbConnection");
exports.createUser = async (data) => {
  await sql`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            full_name VARCHAR(255),
            email VARCHAR(255),
            github_username VARCHAR(255),
            ticket_code SERIAL
        )
    `;
  const newUser = await sql`
        INSERT INTO users ${sql(
          data.data,
          "full_name",
          "email",
          "github_username"
        )}
        RETURNING users.*
    `;
  return newUser;
};

exports.getUser = async () => {
  const data = await sql`
    SELECT *
    FROM users;
  `;
  return data;
};
