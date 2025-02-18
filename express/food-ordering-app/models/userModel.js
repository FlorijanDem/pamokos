const { sql } = require("../dbConnection");
exports.createUser = async (user) => {
  await sql`
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    role VARCHAR(255) NOT NULL DEFAULT 'user',
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

exports.loginUser = async (username, password) => {
  const name = username.username;
  const pass = username.password;
  const [user] = await sql`
        SELECT users.*
        FROM users
        WHERE users.username = ${name};
    `;
  return user;
};

exports.getAllUsers = async () => {
  const users = await sql`
    SELECT users.id, users.username, users.email, users.created_at, users.updated_at
        FROM users;
  `;
  console.log(users);
  return users;
};

exports.getUserById = async (id) => {
  const [user] = await sql`
    SELECT *
    FROM users
    WHERE users.id = ${id};
  `;

  return user;
};

exports.getUserByName = async (username) => {
  const [user] = await sql`
    SELECT users.*
    FROM users
    WHERE users.username = ${username};
  `;
  return user;
};