const db = require('../../config/db')
const { date } = require('../../lib/utils')


module.exports = {
    paginate(params) {

        params.callback([ ])

        // const { filter, limit, offset, callback } = params

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

        // query = `
        // SELECT recipes.*, ${totalQuery} , 
        // count(recipes) AS total_recipes
        // FROM recipes
        // LEFT JOIN recipes ON (recipes.recipe_id = recipes.id)
        // ${filterQuery}
        // GROUP BY recipes.id LIMIT $1 OFFSET $2
        // `
        // db.query(query, [limit, offset], function (err, results) {
        //     if (err) throw `Database error! ${err}`

        //     callback(results.rows)
        // })
    },
    post(data, callback) {

        const query = `
            INSERT INTO recipes (
                name,
                avatar_url,
                created_at
            ) VALUES ($1, $2, $3)
            RETURNING id
        `
        const values = [
            data.name,
            data.avatar_url,
            date(Date.now()).iso
        ]

        db.query(query, values, function (err, results) {
            if (err) throw `Database error! ${err}`

            callback(results.rows[0])
        })
    },
    find(id, callback) {

        db.query(`
            SELECT * FROM recipes WHERE id = $1`, [id], function (err, results) {
            if (err) throw `Database error! ${err}`

            callback(results.rows[0])
        })
    },
    update(data, callback) {
        
        const query = `
        UPDATE recipes SET
        name=($1),
        avatar_url=($2)
    WHERE id = $3
    `
        const values = [
            data.name,
            data.avatar_url,
            data.id
        ]

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