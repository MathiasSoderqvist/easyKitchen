const express = require('express');
const router = require('./router');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./models');
require('dotenv').config();

const app = express();
const PORT = process.env.DB_PORT;

app.use(morgan('tiny'));
app.use(cors());

app.use(express.json());
app.use(router);

db.sequelize.sync().then(() => {
  console.log('db connected');
  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT} 🚀`);
  });
});
