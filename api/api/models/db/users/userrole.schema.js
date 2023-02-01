const { DataTypes } = require("sequelize");

const UsersRoleSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
  },
  accessLevel: {
    type: DataTypes.INTEGER,
  },
  createdAt: {
    field: "created_at",
    type: DataTypes.DATE,
  },
  updatedAt: {
    field: "updated_at",
    type: DataTypes.DATE,
  },
};

const UsersRoleModel = (sequelize) => {
  return sequelize.define("users", UsersRoleSchema);
};

module.exports = {
  UsersRoleSchema,
  UsersRoleModel,
};
