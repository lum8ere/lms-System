const { Directions } = require('../models/models');
const ApiError = require('../error/ApiError');

class DirectionController {
    async create(req, res) {
        const {name} = req.body;
        const direction = await Directions.create({name})
        return res.json(direction);
    }

    async get(req, res) {
        const directions = await Directions.findAll();
        return res.json(directions);
    }
}

module.exports = new DirectionController();