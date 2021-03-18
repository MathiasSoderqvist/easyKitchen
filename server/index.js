const { runServer } = require('./server')
require('dotenv').config();

runServer(process.env.DB_PORT);
