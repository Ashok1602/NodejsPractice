const Sequelize = require("sequelize");
const sequelizeConnection = require("../db_config");

const Orders = sequelizeConnection.define("orders", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false, //if allowNull is true your validation will not work any more
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false, //if allowNull is true your validation will not work any more
        validate: {
          len: {
            args: [5, 50],
            msg: "Please enter title value between 5 to 50 chars",
          },
        },
      },
      total: {
        type: Sequelize.STRING,
        allowNull: false
      },
    });
    
module.exports = Orders;
  