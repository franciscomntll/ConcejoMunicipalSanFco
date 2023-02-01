const { internalServerError } = require("../../routes.utils");

const getNews = (models) => async (req, res) => {
  try {
    console.time("=== Get News ===");
    const data = await models.News.findAll();
    res.status(200).send(data);
    console.timeEnd("=== Get News ===");
  } catch (error) {
    console.timeEnd("=== Get News ===");
    internalServerError(res, error);
  }
};

const getNewsById = (models) => async (req, res) => {
  try {
    console.time("=== Get NewsById ===");
    const data = await models.News.findAll({
      where: { id: req.params.id },
    });
    res.status(200).send(data);
    console.timeEnd("=== Get NewsById ===");
  } catch (error) {
    console.timeEnd("=== Get NewsById ===");
    internalServerError(res, error);
  }
};
module.exports = {
  getNews,
  getNewsById,
};
