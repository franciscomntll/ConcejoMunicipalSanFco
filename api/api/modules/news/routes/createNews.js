const { internalServerError } = require("../../routes.utils");
const createNews = (model, sequelize) => async (req, res) => {
  let transaction = await sequelize.transaction();
  console.time("=== Create News ===");
  try {
    let imageSaved;
    if (req.file) {
      imageSaved = await model.Images.create(req.file, { transaction });
    }
    const newsSaved = await model.News.create(
      {
        ...req.body,
        ...(imageSaved ? { imageId: imageSaved.id } : {}),
      },
      { transaction }
    );
    transaction.commit();
    res.status(200).send(newsSaved);
    console.timeEnd("=== Create News ===");
  } catch (error) {
    if (transaction) {
      transaction.rollback();
    }
    internalServerError(res, error);
    console.timeEnd("=== Create News ===");
  }
};

module.exports = createNews;
