require('dotenv').config();
// require('bootstrap');
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressLayout = require('express-ejs-layouts');

// IMPORT ROUTES
const eventRoutes = require('./api/routes/events');

// CONNECT TO MONGODB DATABASE
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log(`Error: ${err}`));

// LOG WHEN CONNECTION IS SUCCESSFUL
const db = mongoose.connection;
db.once('open', () => console.log('Connected to database successfully'));

app.use(morgan('dev'));

// SET UP MIDDLEWARE
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
    useUnifiedTopology: true,
  })
);

// TELL EXPRESS WHERE TO LOOK FOR STATIC ASSETS
app.use(express.static(__dirname + '/public'));

// Set EJS AS TEMPLATING ENGINE
app.set('view engine', 'ejs');

// Routes which should handle requests
app.use('/events', eventRoutes);

app.use((request, response, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, request, response, next) => {
  response.status(error.status || 500);
  response.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
