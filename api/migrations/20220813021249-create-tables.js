"use strict";
const { imagesSchema } = require("../api/models/db/images/images.schema");
const { NewsSchema } = require("../api/models/db/news/news.schema");

module.exports = {
  async up(queryInterface) {
    queryInterface.createTable("images", imagesSchema);
    queryInterface.createTable("news", NewsSchema);
  },

  async down(queryInterface) {
    queryInterface.dropTable("images");
    queryInterface.dropTable("news");
  },
};
