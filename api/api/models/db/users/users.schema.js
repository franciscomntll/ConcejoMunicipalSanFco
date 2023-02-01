const { DataTypes } = require("sequelize");

const UsersSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  firebaseId: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  roleId: {
    references: {
      model: "userrole",
      key: "id",
    },
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

const UsersModel = (sequelize) => {
  return sequelize.define("users", UsersSchema);
};

module.exports = {
  UsersSchema,
  UsersModel,
};
