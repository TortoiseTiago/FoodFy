const fs = require('fs')
const data = require('../data.json')



exports.home = (req, res) => {
    return res.render("open/home")
}
exports.about = (req, res) => {
    return res.render("open/about")
}
exports.index = (req, res) => {
    return res.render("open/index", { recipes: data.recipes })
}
exports.show = (req, res) => {

    const { id } = req.params

    const recipe = data.recipes.find(function(recipe) {
        return recipe.id == id
    })

    if (!recipe) return res.send("recipe not found")

    return res.render("open/show", { recipe })
}


exports.admin = (req, res) => {
    return res.render("admin/admin", { recipes: data.recipes })
}
exports.create = (req, res) => {
    return res.render("admin/create")
}
exports.post = (req, res) => {

    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "") return res.send("Please, fill all filds")
    }

    let { image, title, author, ingredients, preparation, information } = req.body

    const created_at = Date.now()
    const id = Number(data.recipes.length + 1)

    data.recipes.push({
        id,
        image,
        title,
        author,
        ingredients,
        preparation,
        information,
        created_at
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("write fille error!")

        return res.redirect("/admin")
    })
}
exports.view = (req, res) => {
    const { id } = req.params

    const recipe = data.recipes.find(function(recipe) {
        return recipe.id == id
    })

    if (!recipe) return res.send("recipe not found")

    return res.render("admin/show", { recipe })
}
exports.edit = (req, res) => {
    const { id } = req.params

    const foundRecipe = data.recipes.find(function(recipe) {
        return recipe.id == id
    })

    if (!foundRecipe) return res.send("recipe not found")

    const recipe = {
        ...foundRecipe,
        ingredients,
        preparation,
        information
    }

    return res.render("admin/edit", { recipe })
}