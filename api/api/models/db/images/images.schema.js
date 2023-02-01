const { DataTypes, Sequelize } = require("sequelize");

const imagesSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  fieldname: DataTypes.STRING,
  originalname: DataTypes.STRING,
  encoding: DataTypes.STRING,
  mimetype: DataTypes.STRING,
  destination: DataTypes.STRING,
  filename: DataTypes.STRING,
  path: DataTypes.STRING,
  size: DataTypes.INTEGER,
  createdAt: {
    field: "created_at",
    type: Sequelize.DATE,
  },
  updatedAt: {
    field: "updated_at",
    type: Sequelize.DATE,
  },
};

const ImagesModel = (sequelize) => {
  return sequelize.define("images", imagesSchema);
};

module.exports = {
  imagesSchema,
  ImagesModel,
};
