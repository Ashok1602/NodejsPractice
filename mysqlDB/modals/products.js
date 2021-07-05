module.exports = (Connection, Sequelize) => {
  // console.log(Connection);
  const Products = Connection.define("products", {
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
    description: {
      type: Sequelize.STRING,
      validate: {
        len: {
          args: [5, 150],
          msg: "Please enter title value between 5 to 50 chars",
          startsWithUpper: (bodyVal) => {
            const first = bodyVal.charAt(0);
            const startsWithUpper = first === first.toUppercase();
            if (!startsWithUpper) {
              throw new Error("");
            }
          },
        },
      },
    },
  });
  return Products;
};
