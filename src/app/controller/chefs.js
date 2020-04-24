const Chefs = require('../models/Chefs')


exports.index = (req, res) => {

    let { filter, page, limit } = req.query

    page = page || 1
    limit = limit || 10

    let offset = limit * (page - 1)

    const params = {
        filter, page, limit, offset, callback(chefs) {

            const pagination = {
                total: Math.ceil(chefs[0].total / limit),
                page
            }
            return res.render("chefs/index", { chefs, pagination, filter })
        }
    }

    Chefs.paginate(params, function () { })
}
exports.create = (req, res) => {
    return res.render("chefs/create")
}
exports.post = (req, res) => {

    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "") return res.send("Please, fill all filds")
    }

    Chefs.post(req.body, function (chefs) {
        return res.redirect(`/admin/chefs`)
    })
}
exports.show = (req, res) => {

    Chefs.find(req.params.id, function (chef) {
        if (!chef) return res.send("Chef not found!")

        return res.render("chefs/show", { chef })
    })
}
exports.edit = (req, res) => {
    Chefs.find(req.params.id, function (chef) {
        if (!chef) return res.send("Chef not found!")

        return res.render("chefs/edit", { chef })
    })
}
exports.put = (req, res) => {

    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "") return res.send("Please, fill all filds")
    }
    Chefs.update( req.body, function (chefs) {
        return res.redirect(`/admin/chefs/${req.body.id}`)
    })
    
}
exports.delete = (req, res) => {

    Chefs.delete(req.body.id, function () {
        return res.redirect("/admin/chefs")
    })
}