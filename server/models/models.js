const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Object = sequelize.define("object", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: true },
  img: { type: DataTypes.STRING, allowNull: true },
});

const ObjectInfo = sequelize.define("objectinfo", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, unique: true, allowNull: true },
  discription: { type: DataTypes.STRING, allowNull: true },
});

const SubObject = sequelize.define("subobject", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: true },
});

const SubObjectInfo = sequelize.define("subobjectinfo", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, unique: true, allowNull: true },
  discription: { type: DataTypes.STRING, allowNull: true },
});

const Directions = sequelize.define("directions", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: true },
});

const Group = sequelize.define("group", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: true },
});

const GroupDirections = sequelize.define("groupdirections", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const File = sequelize.define("file", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  pfd: { type: DataTypes.STRING, allowNull: true },
})

Directions.hasMany(Object);
Object.belongsTo(Directions);

Group.hasMany(Object);
Object.belongsTo(Group);

Object.hasMany(File);
File.belongsTo(Object);

Object.hasMany(SubObject);
SubObject.belongsTo(Object);

Object.hasMany(ObjectInfo, {as: 'info'});
ObjectInfo.belongsTo(Object);

SubObject.hasMany(SubObjectInfo, {as: 'info'});
SubObjectInfo.belongsTo(SubObject);

Directions.belongsToMany(Group, { through: GroupDirections });
Group.belongsToMany(Directions, { through: GroupDirections });

module.exports = {
  User,
  Object,
  ObjectInfo,
  Directions,
  GroupDirections,
  Group,
  File,
  SubObject,
  SubObjectInfo
};
