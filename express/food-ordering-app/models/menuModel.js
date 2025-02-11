const { sql } = require("../dbConnection");

exports.addMenu = async (menu) => {
  const title = menu.toAdd;
  await sql`
        CREATE TABLE IF NOT EXISTS menus (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255)
        );
    `;
  const newMenu = await sql`
        INSERT INTO menus (title)
        VALUES (${title})
        RETURNING *
    `;
  return newMenu;
};

exports.editMenu = async (menu) => {
  const id = menu.data.id;
  const title = menu.data.title;
  const [menus] = await sql`
        UPDATE menus
        SET title=${title}
        WHERE id=${id};
    `;
  return menus;
};

exports.removeMenu = async (id) => {
  const toRemove = id.id;
  const [menus] = await sql`
        DELETE 
        FROM menus
        WHERE id=${toRemove};
    `;
  return menus;
};
