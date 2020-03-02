'use strict';

// super agent is used to call APIs
const superagent = require('superagent');

// will be used to query our postgres DB
const database = require('./database.js');

const classesArr = require('../json/classes.json');

// page routes
const routes = {
  homePage: homePage,
  getClasses: getClasses,
  getOneClass: getOneClass
};

function homePage (req, res) {
  res.render('index.ejs');
}

function getClasses (req, res) {
  res.json(classesArr);
}

function getOneClass (req, res) {
  const charRequest = req.params.class;
  const classToSend = classesArr.filter(dndClass => {
    if (dndClass.name.toLowerCase() === charRequest.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  })[0];

  res.json(classToSend);
}

module.exports = routes;

