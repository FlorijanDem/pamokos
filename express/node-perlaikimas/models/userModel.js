const { sql } = require("../dbConnection");
exports.createUser = async (user) => {
  await sql`
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
  );
    `;
  const [newUser] = await sql`
    INSERT INTO users   ${sql(user, "username", "password", "email")}
    RETURNING users.*
  `;
  return newUser;
};

exports.loginUser = async (username) => {
  const name = username.username;
  const [user] = await sql`
        SELECT users.*
        FROM users
        WHERE users.username = ${name};
    `;
  return user;
};

exports.getUserById = async (id) => {
  const [user] = await sql`
    SELECT *
    FROM users
    WHERE users.id = ${id};
  `;

  return user;
};
