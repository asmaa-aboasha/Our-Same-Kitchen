module.exports = function(sequelize, DataTypes) {
  const Meals = sequelize.define("Meals", {
    mealCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });

  return Meals;
};
