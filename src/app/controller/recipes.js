const Recipes = require("../models/Recipes");
const Chefs = require("../models/Chefs");

module.exports = {
  async index(req, res) {
    let results = await Recipes.all();
    const recipes = results.rows;

    results = await Chefs.all();
    const chefs = results.rows;

    return res.render("./recipes/index.njk", { recipes, chefs });
  },
  async create(req, res) {
    let results = await Chefs.all();

    const chefs = results.rows;

    return res.render("recipes/create.njk", { chefs });
  },
  async post(req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Please, fill all fields");
      }
    }

    let results = await Recipes.create(req.body);

    console.log(results.rows);
    const recipeId = results.rows[0].id;

    return res.redirect(`/admin/recipes/${recipeId}`);
  },
  async show(req, res) {
    let results = await Recipes.find(req.params.id);
    const recipe = results.rows[0];

    results = await Chefs.all();
    const chefs = results.rows;

    return res.render("./recipes/show.njk", { recipe, chefs });
  },
  async edit(req, res) {
    let results = await Recipes.find(req.params.id);
    const recipes = results.rows[0];

    results = await Chefs.all();
    const chefs = results.rows;

    return res.render("./recipes/edit.njk", { recipes, chefs });
  },
  async put(req, res) {
    console.log(req.body);
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Please, fill all fields");
      }
    }
    await Recipes.update(req.body);

    return res.redirect(`/admin/recipes/${req.body.id}`);
  },
  async delete(req, res) {
    await Recipes.delete(req.body.id);

    return res.redirect("/admin/recipes");
  },
};
