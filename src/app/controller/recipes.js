const Recipes = require('../models/Recipes')

exports.index = (req, res) => {

    let { filter, page, limit } = req.query

    page = page || 1
    limit = limit || 10

    let offset = limit * (page - 1)

    const params = {
        page, limit, offset, callback(recipes) {

            const pagination = {
                total: Math.ceil(recipes[0].total / limit),
                page
            }
            return res.render("recipes/index", { recipes, pagination, filter })
        }
    }
    Recipes.paginate(params)
}
exports.create = (req, res) => {
    Recipes.chefsSelectOptions(function (options) {
        return res.render("recipes/create", { chefsOptions: options })
    })
}
exports.post = (req, res) => {

    const keys = Object.keys(req.body)
    for (key of keys) {
        if (req.body[key] == "") return res.send("Please, fill all filds")
    }

    Recipes.post(req.body, function (recipes) {
        return res.redirect(`/admin/recipes`)
    })
}
exports.show = (req, res) => {

    Recipes.find(req.params.id, function (recipe) {
        if (!recipe) return res.send("Recipes not found!")

        return res.render("recipes/show", { recipe })
    })
}
exports.edit = (req, res) => {

    Recipes.find(req.params.id, function (recipes) {
        if (!recipes) return res.send("Recipes not found!")

        Recipes.chefsSelectOptions(function (options) {
            return res.render("recipes/edit", { recipes, chefsOptions: options })
        })
    })
}
exports.put = (req, res) => {

    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "") return res.send("Please, fill all filds")
    }

    Recipes.update( req.body, function (recipess) {
        return res.redirect(`/admin/recipes/${req.body.id}`)
    })
    
}
exports.delete = (req, res) => {
    Recipes.delete(req.body.id, function () {
        return res.redirect("/admin/recipes")
    })
}