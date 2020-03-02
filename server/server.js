'use strict';

// Express server library
const express = require('express');
// Create app using express
const app = express();

// Cross Origin Resource Sharing to allow or deny access to web server or client
const cors = require('cors');
// Set CORS settings to open to anything
app.use(cors());

// DB client used to connect to postgres
const database = require('./database.js');

const routes = require('./routes.js');

// Anything static (css or browser-side javascript) should go here
app.use(express.static('./public'));

app.use(express.urlencoded({ extended: true }));

// On the server, we'll use EJS to do templates
app.set('view engine', 'ejs');
// The location of our EJS Templates
app.set('views', './server/views');


app.get('/', routes.homePage);



function serverStart() {
  let PORT = process.env.PORT || 3000;
  database.connect()
    .then(() => app.listen(PORT))
    .then(() => console.log(`Server listening on ${PORT}`))
    .catch(err => console.error(err));
}


module.exports = {
  server: app,
  start: serverStart
};

