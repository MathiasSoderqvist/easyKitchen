module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    clientName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clientAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clientPhone: {
      type: DataTypes.INTEGER(15),
    },
    comments: {
      type: DataTypes.STRING(500),
    },
  });

  Order.associate = (model) => {
    Order.belongsToMany(model.Dish, { through: 'DishesPerOrder' });
  };

  return Order;
};
