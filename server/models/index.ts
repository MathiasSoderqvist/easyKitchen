// OLD CODE ============================================

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const basename = path.basename(__filename);
// const db = {};

// const sequelize = new Sequelize('dbek', process.env.DB_USER, process.env.DB_PASS, {
//   host: 'localhost',
//   dialect: 'postgres',
//   logging: console.log,
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   },
//   operatorsAliases: false // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
// });


// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established succesfully.')
//   })
//   .catch((error) => {
//     console.error('Unable to connect to the database:', error)
//   });

// module.exports = db;

// REFACTOR =================================

import Sequelize from 'sequelize';
import { DbInterface } from '../typings/DbInterface';
import { DishFactory } from './dish.model'
import { MenuFactory } from './menu.model'
import { OrderFactory } from './order.model'

export const createModels = (): DbInterface => {
  const sequelize = new Sequelize('dbek', process.env.DB_USER, process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'postgres',
    logging: console.log,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    operatorsAliases: false // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  });

  const db: DbInterface = {
    sequelize,
    Sequelize,
    Dish: DishFactory(sequelize, Sequelize),
    Menu: MenuFactory(sequelize, Sequelize),
    Order: OrderFactory(sequelize, Sequelize)
  }

  return db;
}



