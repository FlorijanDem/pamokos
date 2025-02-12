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
  await sql`
    CREATE TABLE IF NOT EXISTS users_secrets (
    id SERIAL PRIMARY KEY,
    user_id SERIAL REFERENCES users(id),
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
  const password = await sql`
    INSERT INTO users_secrets ${sql(user.data, "password")}
    `;
  return newUser;
};
