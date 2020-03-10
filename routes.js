const express = require('express')
const routes = express.Router()
const receitas = require('./data')

routes.get("/", (req, res) => {
    return res.redirect("home")
})

routes.get("/home", (req, res) => {
    return res.render("home")
})

routes.get("/about", (req, res) => {
    return res.render("about")
})
routes.get("/recipes", (req, res) => {
    return res.render("recipes", { items: receitas })
})
routes.get("/recipes/:index", (req, res) => {
    const recipes = [...receitas];
    const index = req.params.index;

    console.log(recipes[index])
    return res.send(index)
})

module.exports = routes