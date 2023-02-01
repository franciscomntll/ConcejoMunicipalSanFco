const { internalServerError } = require("../../routes.utils");
const deleteNews = (models, sequelize) => async (req, res) => {
  let transaction = await sequelize.transaction();
  try {
    console.time("=== Delete News ===");
    let newsIds = req.body.newsId;
    newsIds && (newsIds = JSON.parse(newsIds));
    const result = await models.News.destroy(
      {
        where: {
          id: newsIds,
        },
      },
      { transaction }
    );
    transaction.commit();
    console.timeEnd("=== Delete News ===");
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.timeEnd("=== Delete News ===");
    if (transaction) {
      transaction.rollback();
    }
    internalServerError(res, error);
  }
};

module.exports = deleteNews;
