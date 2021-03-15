const { CLIEngine } = require('eslint');
const { Order, Dish } = require('../models');

//get all orders
exports.getAll = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [{ model: Dish }],
    });
    res.status(200);
    console.log('orders -> ', orders);
    res.send(orders);
  } catch (e) {
    console.log(e); //eslint-disable-line no-console
    res.status(500);
  }
};

// create an order
exports.createOrder = async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);
    await newOrder.setDishes(req.body.DishId); //update join table data
    const dishes = await newOrder.getDishes();
    console.log('dishes -> ', dishes);
    const body = newOrder.toJSON();
    body.Dishes = dishes.flat().map((dish) => dish.toJSON());
    console.log('createOrderBody', body);
    res.status(201);
    res.send(body);
  } catch (e) {
    console.log(e); //eslint-disable-line no-console
    res.status(500).send(e);
  }
};

// delete a order
exports.deleteOrder = async (req, res) => {
  const id = parseInt(req.body.id);

  Order.destroy({
    where: { id: id },
  })
    .then(() => {
      res.status(204).end();
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error deletingOrder with id=' + id,
      });
    });
};

//TODO: modify an order (if needed later)
