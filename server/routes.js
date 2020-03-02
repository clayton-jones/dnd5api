'use strict';

// super agent is used to call APIs
const superagent = require('superagent');

// will be used to query our postgres DB
const database = require('./database.js');

// page routes
const routes = {
  homePage: homePage
};

function homePage (req, res) {
  res.render('index.ejs');
}


module.exports = routes;

