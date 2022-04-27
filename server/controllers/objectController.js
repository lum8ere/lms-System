const uuid = require("uuid");
const path = require("path");
const { Object, ObjectInfo } = require("../models/models");
const ApiError = require("../error/ApiError");

class ObjectController {
  async create(req, res, next) {
    try {
      const { name, groupId, directionsId, info } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".pdf";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const object = await Object.create({
        name,
        groupId,
        directionsId,
        img: fileName,
      });

      if (info) {
        info = JSON.parse(info);
        info.forEach((i) =>
          ObjectInfo.create({
            title: i.title,
            discription: i.discription,
            objectId: object.id,
          })
        );
      }

      return res.json(object);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async get(req, res) {
    let { groupId, directionsId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 10;
    let offset = page * limit - limit;
    let objects;
    if (!groupId && !directionsId) {
      objects = await Object.findAndCountAll({ limit, offset });
    }

    return res.json(objects);
  }

    async getOne(req, res) {
      const { id } = req.params;
      const object = await Object.findOne({
        where: { id },
        include: [{ model: ObjectInfo, as: "info" }],
      });
      return res.json(object);
    }
}

module.exports = new ObjectController();
