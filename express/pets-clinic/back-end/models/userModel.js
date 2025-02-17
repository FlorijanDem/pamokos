const { sql } = require("../dbConnection");

exports.createUser = async (user) => {
  await sql`
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL DEFAULT 'user',
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
  );
    `;
  const [newUser] = await sql`
  INSERT INTO users 
  ${sql(user, "first_name", "last_name", "email", "password", "role")}
  RETURNING *
  `;

  return newUser;
};

exports.getUserById = async (id) => {
  const user = await sql.begin(async () => {
    const [user] = await sql`
    SELECT *
    FROM users
    WHERE id = ${id}
  `;

    if (!user) return;

    user.pets = await sql`
    SELECT pets.id, pets.name
    FROM pets
    WHERE pets.user_id = ${user?.id}
  `;

    return user;
  });

  return user;
};

exports.getUserByEmail = async (email) => {
  const user = await sql.begin(async () => {
    const [user] = await sql`
    SELECT *
    FROM users
    WHERE email = ${email}
  `;

    if (!user) return;

    user.pets = await sql`
    SELECT pets.id, pets.name
    FROM pets
    WHERE pets.user_id = ${user?.id}
  `;

    return user;
  });

  return user;
};
