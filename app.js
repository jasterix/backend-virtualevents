const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const indexRouter = require('./server/routes/index');
const eventsRouter = require('./server/routes/events');

const app = express();

app.use('/', indexRouter);
app.use('/events', eventsRouter);

eventsRouter.route('/events').get((res, req) => {
  Event.find((err, event) => {
    if (err) {
      return res.send(err);
    }
    return res.json(event);
  });
});

// create database
// const db = mongoose.connect('mongodb://localhost/eventsapi');

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
