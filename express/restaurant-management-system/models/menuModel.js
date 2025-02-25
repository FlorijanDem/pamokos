const { sql } = require("../dbConnection");

exports.createMenuItem = async (data) => {
  await sql`
        CREATE TABLE IF NOT EXISTS categories (
            id SERIAL PRIMARY KEY,
            category_name VARCHAR(255)
        )
    `;
  await sql`
        CREATE TABLE IF NOT EXISTS menu_items (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255),
            description VARCHAR(255),
            price FLOAT,
            category_id INTEGER,
            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()
        )
    `;
  const item = await sql`
        INSERT INTO menu_items ${sql(
          data.data,
          "name",
          "description",
          "price",
          "category_id"
        )}
        RETURNING menu_items.*
   `;
  //   const categoryOfItem = await sql`
  //         SELECT menu_items.id menu_items.category_id
  //         FROM menu_items
  //         ORDER BY id DESC LIMIT 1
  //    `;
  return item;
};

exports.getAllMenuItems = async () => {
  const items = await sql`
        SELECT *
        FROM menu_items
    `;
  return items;
};

exports.menuItemById = async (id) => {
  const item = await sql`
        SELECT *
        FROM menu_items
        WHERE id=${id.id}
    `;
  return item;
};

exports.deleteMenuItemById = async (id) => {
  const item = await sql`
        DELETE
        FROM menu_items
        WHERE id=${id.id}
    `;
  return item;
};

exports.updateMenuItemById = async (data) => {
  const item = await sql`
        UPDATE  menu_items
        SET name=${data.data.name}, description=${data.data.description}, price=${data.data.price}, category_id=${data.data.category_id}
        WHERE id=${data.id}
    `;
  return item;
};
