const { DataTypes } = require("sequelize");
const slugify = require("slugify");

const NEWS_TABLE = "News";

const NewsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  content: {
    type: DataTypes.TEXT,
  },
  slug: {
    type: DataTypes.STRING,
  },
  imageId: {
    type: DataTypes.INTEGER,
    onDelete: 'CASCADE',
    references: {
      model: "images",
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

const NewsModel = (sequelize) => {
  return sequelize.define("news", NewsSchema, {
    hooks: {
      beforeCreate: function (instance) {
        instance.set("slug", slugify(instance.get("title")));
      },
    },
  });
};

module.exports = {
  NewsSchema,
  NewsModel,
  NEWS_TABLE,
};
