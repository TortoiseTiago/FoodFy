const express = require('express')
const routes = express.Router()
const site = require('./app/controller/site')
const chefs = require('./app/controller/chefs')
const recipes = require('./app/controller/recipes')


// ROTAS GENERICAS
routes.get("/", (req, res) => {
    return res.redirect("home")
})
routes.get("/admin", (req, res)=>{
    return res.redirect("/admin/recipes")
})

// PAGINAS ABERTAS AO PUBLICO
routes.get("/home", site.home) // inicio do site com as receitas mais acessadas  
routes.get("/about", site.about) // um pouco da historia do site
routes.get("/recipes", site.recipes) // todas as receitas do site 
routes.get("/chefs", site.chefs) // listagem de chefs do site
routes.get("/recipes/:id", site.showRecipe)  // detalhes das receitas do site
routes.get("/chefs/:id", site.showChef) // detales e receitas do chef selecionado


// ADMINISTRAÇÃO DOS CHEFS
routes.get("/admin/chefs", chefs.index) // lista de chefs cadastrados
routes.get("/admin/chefs/create", chefs.create) // formulario para cadastro de chef
routes.post("/admin/chefs", chefs.post) // rota de cadastro das informações dos chefs
routes.get("/admin/chefs/:id", chefs.show) // visualização do chef
routes.get("/admin/chefs/:id/edit", chefs.edit) //rota para edição do chef
routes.put("/admin/chefs", chefs.put) //rota para atualização de dados
routes.delete("/admin/chefs", chefs.delete) // rota para deletar um chef


// ADMINISTRAÇÃO DAS RECEITAS
routes.get("/admin/recipes", recipes.index) // lista de receitas cadastrados
routes.get("/admin/recipes/create", recipes.create) // formulario para cadastro de receita
routes.post("/admin/recipes", recipes.post) // rota de cadastro das informações dos receita
routes.get("/admin/recipes/:id", recipes.show) // visualização do receita
routes.get("/admin/recipes/:id/edit", recipes.edit) //rota para edição do receita
routes.put("/admin/recipes", recipes.put) //rota para atualização de dados
routes.delete("/admin/recipes", recipes.delete) // rota para deletar um receita


module.exports = routes