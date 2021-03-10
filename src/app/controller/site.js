const Chefs = require("../models/Chefs");
const Recipes = require("../models/Recipes");

const { recipes } = require("../../../data.json");

exports.home = (req, res) => {
  return res.render("site/home", { recipes });
};
exports.about = (req, res) => {
  return res.render("site/about");
};
exports.recipes = (req, res) => {
  return res.render("site/recipes", { recipes });
};
exports.chefs = (req, res) => {
  return res.render("site/chefs", { recipes });
};
exports.showRecipe = (req, res) => {
  return res.render("site/showRecipe");
};
exports.showChef = (req, res) => {
  return res.render("site/showChef");
};
