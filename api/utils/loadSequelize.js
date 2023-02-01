const { Sequelize } = require("sequelize");
const config = require("../config/config");
require("dotenv/config");

module.exports = async () => {
  try {
        console.log(`=== Enviroment: ${process.env.NODENV || "development"} ===`)
        const sequelize = new Sequelize(config[process.env.NODENV || "development"]);
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
        return sequelize;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
