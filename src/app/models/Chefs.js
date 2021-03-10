const db = require("../../config/db");

module.exports = {
  all() {
    return db.query(`
    SELECT * FROM chefs ORDER BY id`);
  },
  async create(data) {
    const query = `
      INSERT INTO chefs (
        name,
        avatar_url
      )VALUES ($1, $2) RETURNING id
    `;

    const values = [data.name, data.avatar_url];

    const results = await db.query(query, values);

    return results;
  },
  find(id) {
    return db.query("SELECT * FROM chefs WHERE id = $1", [id]);
  },
  update(data) {
    const query = `
      UPDATE chefs SET name=($1), avatar_url=($2) WHERE id=$3
    `;

    const values = [data.name, data.avatar_url, data.id];

    return db.query(query, values);
  },
  delete(id) {
    return db.query(`DELETE FROM chefs WHERE id = $1`, [id]);
  },
};
