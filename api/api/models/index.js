module.exports = (sequelize) => {
  const { NewsModel } = require("./db/news/news.schema");
  const { ImagesModel } = require("./db/images/images.schema");

  NewsModel(sequelize).hasOne(ImagesModel(sequelize), {
    foreignKey: "imageId",
    otherKey: "id",
  });
  ImagesModel(sequelize).belongsTo(NewsModel(sequelize));
  
  return {
    News: NewsModel(sequelize),
    Images: ImagesModel(sequelize),
  };
};
