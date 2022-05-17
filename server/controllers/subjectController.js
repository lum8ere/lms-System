const uuid = require("uuid");
const path = require("path");
const { SubObject, SubObjectInfo } = require("../models/models");
const ApiError = require("../error/ApiError");

class SubObjectController {
  async create(req, res, next) {
    try {
      const { name, objectId, info } = req.body;
      const subobject = await SubObject.create({
        name,
        objectId,
      });

      if (info) {
        info = JSON.parse(info);
        info.forEach((i) =>
          SubObjectInfo.create({
            title: i.title,
            discription: i.discription,
            objectId: subobject.id,
          })
        );
      }

      return res.json(SubObject);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async get(req, res) {
    let { objectId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 10;
    let offset = page * limit - limit;
    let objects;
    if (!objectId) {
      objects = await SubObject.findAndCountAll({ limit, offset });
    }

    return res.json(objects);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const subobject = await SubObject.findOne({
      where: { id },
      include: [{ model: SubObjectInfo, as: "info" }],
    });
    return res.json(subobject);
  }
}

module.exports = new SubObjectController();
