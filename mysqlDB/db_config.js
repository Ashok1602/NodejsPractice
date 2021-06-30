const Sequelize = require("sequelize");

//connection
const sequelizeConnection = new Sequelize(
  "demo_scheme",
  "root",
  "root",
  {
    dialect: "mysql",
  }
);

module.exports = sequelizeConnection;
  