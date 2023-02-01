const multer = require("multer");
const { Router } = require("express");
const createNews = require("./routes/createNews");
const {getNews, getNewsById} = require("./routes/getNews");
const deleteNews = require("./routes/deleteNews");
const path = require("path");
const getRawAttributes = require("./routes/getRawAttributes");

const router = Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); //Appending extension
  },
});
const upload = multer({ dest: "uploads/", storage });

module.exports = (models, sequelize) => {
  router.get(`/`, getNews(models, sequelize));
  router.get(`/:id`, getNewsById(models, sequelize));
  router.post(`/`, upload.single("file"), createNews(models, sequelize));
  router.patch(`/`, multer().any(), deleteNews(models, sequelize));
  router.get(`/1/raw`, getRawAttributes(models, sequelize));

  return router;
};
