const db = require("../../config/db");

module.exports = {
  all() {
    return db.query(`
    SELECT * FROM recipes ORDER BY id`);
  },
  create(data) {
    const query = `
      INSERT INTO recipes (
        chef_id,
        image,
        title,
        ingredients,
        preparation,
        information
      ) VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id
    `;

    const values = [
      data.chef_id || 1,
      data.image,
      data.title,
      data.ingredients,
      data.preparation,
      data.information,
    ];

    return db.query(query, values);
  },
  find(id) {
    return db.query(`SELECT * FROM recipes WHERE id = $1`, [id]);
  },
  update(data) {
    const query = `
      UPDATE recipes SET
        chef_id = ($1),
        image = ($2),
        title = ($3),
        ingredients = ($4),
        preparation = ($5),
        information = ($6)
      WHERE id = $7
    `;

    const values = [
      data.chef_id,
      data.image,
      data.title,
      data.ingredients,
      data.preparation,
      data.information,
      data.id,
    ];

    return db.query(query, values);
  },
  delete(id) {
    return db.query(`DELETE FROM recipes WHERE id = $1`, [id]);
  },
};
