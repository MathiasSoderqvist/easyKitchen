// const db = require('../models/index'); => db.Menu
const { Menu, Dish } = require('../models');

//get all menus
exports.getAll = async (req, res) => {
  try {
    const menus = await Menu.findAll({
      include: [{ model: Dish }],
    });
    res.status(200);
    res.send(menus);
  } catch (e) {
    console.log(e); //eslint-disable-line no-console
    res.status(500);
  }
};

//get menu by Id
exports.getOneMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const menu = await Menu.findOne({
      where: { id: id },
    });
    res.status(200);
    res.send(menu);
  } catch (e) {
    console.log(e); //eslint-disable-line no-console
    res.status(500);
  }
};

// create a menu
exports.createMenu = async (req, res) => {
  console.log('req.body -> ', req.body.DishId);
  try {
    const newMenu = await Menu.create(req.body);
    newMenu.addDish(req.body.DishId);
    res.status(201);
    res.send(newMenu);
  } catch (e) {
    console.log(e); //eslint-disable-line no-console
    res.status(500).send(e);
  }
};

// delete a menu
exports.deleteMenu = async (req, res) => {
  const title = req.body.title;
  Menu.destroy({
    where: { title: title },
  })
    .then(() => {
      res.status(204).send(id);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error deletingOrder with title' + title,
      });
    });
};

//TODO: modify a menu (if needed later)
