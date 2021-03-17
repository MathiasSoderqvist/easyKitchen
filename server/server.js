const express = require('express');
const router = require('./router');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./models');
require('dotenv').config();

exports.runServer = async (port) => {
  const app = express();
  const PORT = port;

  app.use(morgan('tiny'));
  app.use(cors());

  app.use(express.json());
  app.use(router);

  return db.sequelize.sync().then(() => {
    console.log('db connected');
    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT} 🚀`);
    });
    return app;
  })
}

