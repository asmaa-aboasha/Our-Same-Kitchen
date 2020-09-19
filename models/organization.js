module.exports = function(sequelize, DataTypes) {
  const Organization = sequelize.define("Organization", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mealCountGoal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    pickUpDays: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Organization;
};
