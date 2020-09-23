module.exports = function(sequelize, DataTypes) {
  const Meals = sequelize.define("Meals", {
    mealCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Meals.associate = function(models) {
    // We're saying that Meals should belong to a User
    // A Meal can't be created without a User due to the foreign key constraint
    Meals.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Meals;
};
