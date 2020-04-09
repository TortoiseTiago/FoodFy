const express = require('express')
const routes = express.Router()
const recipes = require('./controller/recipes')

routes.get("/", (req, res) => {
    return res.redirect("home")
})

routes.get("/home", recipes.home)
routes.get("/about", recipes.about)
routes.get("/index", recipes.index)
routes.get("/index/:id", recipes.show)

routes.get("/admin", recipes.admin)
routes.get("/create", recipes.create)
routes.post("/create", recipes.post)
routes.get("/admin/:id", recipes.view)
routes.get("/admin/:id/edit", recipes.edit)


module.exports = routes