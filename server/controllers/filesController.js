const uuid = require("uuid");
const path = require("path");
const { File } = require("../models/models");
const ApiError = require("../error/ApiError");

class ObjectController {
  async create(req, res, next) {
    try {
      const { name, subobjectId } = req.body;
      const { pfd } = req.files;
      const cors = "https://cors-anywhere.herokuapp.com/";
      let fileName = cors + uuid.v4() + ".pdf";
      pfd.mv(path.resolve(__dirname, "..", "static", fileName));

      const file = await File.create({ name, subobjectId, pfd: fileName });

      return res.json(file);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async get(req, res) {
    let { subobjectId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 10;
    let offset = page * limit - limit;
    let Files;
    if (!subobjectId) {
        Files = await File.findAndCountAll({ limit, offset });
    }

    return res.json(Files);
  }

//   async getOne(req, res) {
//     const { id } = req.params;
//     const object = await Object.findOne({
//       where: { id },
//       include: [{ model: DeviceInfo, as: "info" }],
//     });
//     return res.json(object);
//   }
}

module.exports = new ObjectController();
