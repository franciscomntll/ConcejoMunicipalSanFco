const { internalServerError } = require("../../routes.utils");

const getRawAttributes = (models) => async (req, res) => {
  try {
    console.time("=== Get Raw Attributes News ===");
    const raw = models.News.rawAttributes;
    const newObject = [];
    for (let key in raw) {
      newObject.push({
        field: key,
        type: raw[key].type.key,
      });
    }
    res.status(200).send(newObject);
    console.timeEnd("=== Get Raw Attributes News ===");
  } catch (error) {
    console.timeEnd("=== Get Raw Attributes News ===");
    internalServerError(res, error);
  }
};

module.exports = getRawAttributes;
