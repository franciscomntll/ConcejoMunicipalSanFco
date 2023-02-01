const helmet = require("helmet");
const getRoutes = require("./routes").default;
const { Router } = require("express");

const router = Router();

module.exports = (app, models, sequelize) => {
  app.use(helmet());

  const baseRoutesPath = "./modules";
  const routes = getRoutes();

  routes.map(([path, ...args]) => {
    const routeArgs = args.map((arg) =>
      typeof arg === "function" ? arg : require(baseRoutesPath + arg)(models, sequelize)
    );
    router.use(path, ...routeArgs);
  });

  app.use("/", router);

  //default
  app.all("*", (req, res) => {
    res.status(404).send({ message: "Not Route Found" });
  });
};
