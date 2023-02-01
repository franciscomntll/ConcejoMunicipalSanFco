require("dotenv/config");
const options = {
  port: 5432,
  logging: console.log(),
  pool: {
    evict: 10000,
    idle: 0,
    acquire: 12000,
    max: 4,
  },
  dialectOptions: {
    connectTimeout: 30000,
    multipleStatements: true,
  },
};

module.exports = {
  development: {
    ...options,
    host: process.env.DB_HOST_DEV,
    database: process.env.DB_NAME_DEV,
    username: process.env.DB_USER_DEV,
    password: process.env.DB_PASSWORD_DEV,
    dialect: 'postgres'
  },
  production: {
    ...options,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: 'postgres'
  },
};