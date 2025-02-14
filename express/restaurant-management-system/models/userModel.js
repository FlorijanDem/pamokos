const { sql } = require("../dbConnection");

exports.createUser = async (user) => {
  await sql`
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_number VARCHAR(255) UNIQUE NOT NULL,
    address VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
  );
    `;
  // Now user_id is NULL, need fix later
  await sql`
    CREATE TABLE IF NOT EXISTS users_secrets (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    password VARCHAR(255),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
  );
    `;
  await sql`
    CREATE TABLE IF NOT EXISTS roles (
    id SERIAL PRIMARY KEY,
    role_name VARCHAR(255) DEFAULT 'user'
    )
    `;
  await sql`
    CREATE TABLE IF NOT EXISTS user_roles (
    user_id INTEGER REFERENCES users(id),
    role_id INTEGER REFERENCES roles(id)
    )
    `;
  const [newUser] = await sql`
        INSERT INTO users ${sql(
          user.data,
          "name",
          "email",
          "phone_number",
          "address"
        )}
    `;
  const user_id = await sql`
        SELECT users.id
        FROM users
        ORDER BY id DESC LIMIT 1
  `;
  const password = await sql`
    INSERT INTO users_secrets (password, user_id)
    VALUES (${user.data.password}, ${user_id[0].id})
    `;
  return newUser;
};

exports.getAllUsers = async () => {
  const users = await sql`
    SELECT *
    FROM users
  `;
  return users;
};

exports.getById = async (id) => {
  const user = await sql`
    SELECT *
    FROM users
    WHERE id=${id.id}
  `;
  return user;
};

exports.deleteById = async (id) => {
  const user = await sql`
    DELETE
    FROM users
    WHERE id=${id.id}
  `;
  return user;
};

exports.updateByID = async (data) => {
  const user = await sql`
    UPDATE users
    SET name=${data.data.name}, email=${data.data.email}, phone_number=${data.data.phone_number}
    WHERE id=${data.id}
  `;
  const password = await sql`
    UPDATE users_secrets
    SET password=${data.data.password}
    WHERE user_id=${data.id}
  `;
  return user;
};

exports.login = async (data) => {
  const user = await sql`
    SELECT users.id, users.name, users.email
    FROM users
    WHERE users.email=${data.data.email}
  `;
  const pass = await sql`
    SELECT user_id
    FROM users_secrets
    WHERE user_id=${user[0].id} AND password=${data.data.password}
  `;
  if (user[0].id == pass[0].user_id) {
    return user;
  } else {
    console.log("Something wrong");
  }
};
