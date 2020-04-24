const db = require('../../config/db')
const { date } = require('../../lib/utils')


module.exports = {
    paginate(params) {

        const { limit, offset, callback } = params

        // let query = "",
        //     filterQuery = "",
        //     totalQuery = `(
        //         SELECT count(*) FROM recipes
        //     ) AS total `

        // if (filter) {

        //     filterQuery = `
        //     WHERE recipes.title ILIKE '%${filter}%'
        //     `
        //     totalQuery = `(
        //         SELECT count(*) FROM recipes
        //         ${filterQuery}
        //     ) AS total`
        // }

        query = `
        SELECT * 
        FROM recipes
        GROUP BY recipes.id LIMIT $1 OFFSET $2
        `
        db.query(query, [limit, offset], function (err, results) {
            if (err) throw `Database error! ${err}`

            callback(results.rows)
        })
    },
    chefsSelectOptions(callback) {
        db.query(`
        SELECT name, id FROM chefs`, function (err, results) {
            if (err) throw `Database error! ${err}`

            callback(results.rows)
        })
    },
    post(data, callback) {

        const query = `
            INSERT INTO recipes (
                chef_id,
                image,
                title,
                ingredients,
                preparation,
                information,
                created_at
            ) VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id
        `
        const values = [
            data.chef_id,
            data.image,
            data.title,
            data.ingredients,
            data.preparation,
            data.information,
            date(Date.now()).iso
        ]

        db.query(query, values, function (err, results) {
            if (err) throw `Database error! ${err}`

            callback(results.rows[0])
        })
    },
    find(id, callback) {

        db.query(`
            SELECT * FROM recipes 
            WHERE id = $1
            `, [id], function (err, results) {
            if (err) throw `Database error! ${err}`

            callback(results.rows[0])
        })
    },
    update(data, callback) {

        const query = `
        UPDATE recipes SET
            chef_id=($1),
            image=($2),
            title=($3),
            ingredients=($4),
            preparation=($5),
            information=($6)
        WHERE id = $7
        `
        const values = [
            data.chef_id,
            data.image,
            data.title,
            data.ingredients,
            data.preparation,
            data.information,
            data.id
        ]
        console.log(values)
        db.query(query, values, function (err, results) {
            if (err) throw `Database error! ${err}`
            callback()
        })
    },
    delete(id, callback) {
        db.query(`
            DELETE FROM recipes WHERE id = $1`, [id], function (err, results) {
            if (err) throw `Database error! ${err}`

            callback()
        })
    }
}