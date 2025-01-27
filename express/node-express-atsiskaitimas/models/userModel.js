const { sql } = require("./../dbConnection");

exports.register = async (user) => {
  if (!user || typeof user !== 'object' || !user.name || typeof user.name !== 'string' || !user.email || typeof user.email !== 'string') {
    throw new Error('Invalid user object');
  }

  const [newUser] = await sql`
  INSERT INTO users (username, email, password)
  VALUES (${user.username}, ${user.email}, ${user.password})
  RETURNING users.*
  `;
  return newUser;
};

exports.getUserByUsername = async (username) => {
  const [user] = await sql`
  SELECT users.*
  FROM users
  WHERE username = ${username}
  `;
  return user;
};

exports.getUserById = async (id) => {
  const [user] = await sql`
  SELECT .*
  FROM users
  WHERE users.id = ${id}
  `;
  return user;
};
