const { sql } = require("../dbConnection");
exports.createUser = async (user) => {
  await sql`
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
  );
    `;
  const [newUser] = await sql`
    INSERT INTO users   ${sql(user, "username", "password", "email")}
    RETURNING users.*
  `;
  return newUser;
};

exports.loginUser = async (username) => {
  const [user] = await sql`
        SELECT users.*
        FROM users
        WHERE users.username = ${username}
    `;
  return user;
};
