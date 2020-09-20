module.exports = function(sequelize, DataTypes) {
  const Establishment = sequelize.define("Establishment", {
    mealCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    totalMealsDonated: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    }
  });

  Establishment.associate = function(models) {
    // We're saying that an Establishment should belong to a User
    // An Establishment can't be created without a User due to the foreign key constraint
    Establishment.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Establishment;
};
