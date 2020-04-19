'use strict'; //For use with ES6

const express = require('express');
const mongoose = require('mongoose');
const http = require('http');

const app = express();
// app.use(cors());
const port = process.env.PORT || 3000;

// DATABASE

mongoose
  .connect('mongodb+srv://cluster0-7uavs.mongodb.net/test', {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Connected to the database...');
  })
  .catch((error) => {
    console.log(error);
  });

// MIDDLEWARE
app.use('/createEvent', () => {});

// PASS IN JSON
app.use(express.json());

// PASS IN FORM DATA
app.use(express.urlencoded({ extended: true }));

// CONTROLLERS

const EventController = require('./src/controllers/EventController');
// ROUTES

app.post('api/event/create', EventController.create);

// START SERVER
app.listen(port, () => {
  console.log(`Running server on port ${port}`);
});
8;
