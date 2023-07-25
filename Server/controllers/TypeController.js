const { Type } = require("../models");

class TypeController {
    static getTypes (req, res) {
        Type.findAll()
        .then((type) => {
            res.json(type);
        })
        .catch((err) => {
            res.json(err);
        });
    }

    static create (req, res) {
        Type.create()
        .then((type) => {
            res.json(type);
        })
        .catch((err) => {
            res.json(err);
        });
    }
}

module.exports = TypeController;