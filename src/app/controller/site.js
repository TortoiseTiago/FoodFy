


exports.home = (req, res) => {
    return res.render("site/home")
}
exports.about = (req, res) => {
    return res.render("site/about")
}
exports.recipes = (req, res) => {
    return res.render("site/recipes")
}
exports.chefs = (req, res) => {
    return res.render("site/chefs")
}
exports.showRecipe = (req, res) => {
    return res.render("site/showRecipe")
}
exports.showChef = (req, res) => {
    return res.render("site/showChef")
}

