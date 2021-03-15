module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Menu.associate = (model) => {
    Menu.belongsToMany(model.Dish, { through: 'DishesPerMenu' });
  };
  return Menu;
};
