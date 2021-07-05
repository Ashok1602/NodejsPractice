const Sequelize = require("sequelize");

//connection
const connection = new Sequelize(
  "demo_scheme",
  "root",
  "root",
  {
    dialect: "mysql",
  }
);

const Db = {};

Db.connection = connection;
Db.Sequalize = Sequelize;

Db.products = require("./products")(connection, Sequelize);
Db.products = require("./orders")(connection, Sequelize);

module.exports = Db;