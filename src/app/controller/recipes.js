const db = require('../../config/db')

const Recipes = require('../models/Recipes')


exports.index = (req, res) => {

    let { filter, page, limit } = req.query

    page = page || 1
    limit = limit || 10

    let offset = limit * (page - 1)

    const params = {
        page, limit, offset, callback(recipes) {

            const pagination = {
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
        return res.redirect(`/admin/recipes/${recipe.id}`)
    })
}
exports.show = (req, res) => {

    Recipess.find(req.params.id, function (recipes) {
        if (!recipes) return res.send("Recipes not found!")

        return res.render("recipess/show", { recipes })
    })
}
exports.edit = (req, res) => {
    Recipess.find(req.params.id, function (recipes) {
        if (!recipes) return res.send("Recipes not found!")

        return res.render("recipess/edit", { recipes })
    })
}
exports.put = (req, res) => {

    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "") return res.send("Please, fill all filds")
    }
    Recipess.update( req.body, function (recipess) {
        return res.redirect(`/admin/recipess/${req.body.id}`)
    })
    
}
exports.delete = (req, res) => {
    Recipess.delete(req.body.id, function () {
        return res.redirect("/admin/recipess")
    })
}