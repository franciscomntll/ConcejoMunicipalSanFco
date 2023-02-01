const express = require("express");
const bodyParser = require("body-parser");
const loadSequelize = require("./utils/loadSequelize");
const loadDBModels = require("./api/models/index");
const initApp = require("./api/index");
const cors = require("cors");

require("dotenv/config");

const app = express();

const port = process?.env?.PORT || 8080; // establecemos nuestro puerto

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'example.com');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
}

app.use(allowCrossDomain)
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const loadApp = () => {
  loadSequelize().then((sequelize) => {
    const models = loadDBModels(sequelize);
    initApp(app, models, sequelize);
    app.listen(port, () => {
      console.log("Aplication running in port", port);
      console.log("Started!");
    });
  });
};

loadApp();
