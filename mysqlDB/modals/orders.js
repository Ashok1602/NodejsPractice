

module.exports = (Connection, Sequelize) => {
  // console.log(Connection);
  const Orders = Connection.define("orders", {
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
      type: Sequelize.INTEGER,
      allowNull: false
    },
  });
  return Orders;
};
