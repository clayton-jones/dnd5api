'use strict';

// Read configurations from the .env file
require('dotenv').config();

// Import our server module
const server = require('./server/server.js');

server.start();
