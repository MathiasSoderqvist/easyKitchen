module.exports = (sequelize, DataTypes) => {
  const Dish = sequelize.define('Dish', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(1024),
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(1024),
    },
  });

  Dish.associate = (model) => {
    Dish.belongsToMany(model.Menu, { through: 'DishesPerMenu' });
    Dish.belongsToMany(model.Order, { through: 'DishesPerOrder' });
  };

  return Dish;
};
