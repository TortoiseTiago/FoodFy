const Chefs = require("../models/Chefs");

module.exports = {
  async index(req, res) {
    let results = await Chefs.all();

    const chefs = results.rows;

    return res.render("./chefs/index.njk", { chefs });
  },
  create(req, res) {
    return res.render("chefs/create.njk");
  },
  async post(req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Please, fill all fields");
      }
    }

    let results = await Chefs.create(req.body);

    const ChefId = results.rows[0].id;
    console.log(ChefId);

    return res.redirect(`/admin/chefs/${ChefId}`);
  },
  async show(req, res) {
    let results = await Chefs.find(req.params.id);

    const chef = results.rows[0];
    console.log(chef.name);

    return res.render("./chefs/show.njk", { chef });
  },
  async edit(req, res) {
    let results = await Chefs.find(req.params.id);
    const chef = results.rows[0];

    return res.render("./chefs/edit.njk", { chef });
  },
  async put(req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Please, fill all fields");
      }
    }

    await Chefs.update(req.body);

    return res.redirect(`/admin/chefs/${req.body.id}`);
  },
  async delete(req, res) {
    await Chefs.delete(req.body.id);

    return res.redirect("/admin/chefs");
  },
};
