'use strict'; //For use with ES6



// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const http = require('http');
// const bodyParser = require('body-parser');

// const app = express();

// const port = process.env.PORT || 5000;

// // DATABASE

// mongoose.connect(
//   `mongodb+srv://jasterix:123@cluster0-7uavs.mongodb.net/test?retryWrites=true&w=majority`,
//   {
//     useNewUrlParser: true,
//   }
// );

// // MIDDLEWARE
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );
// app.use(bodyParser.json());

// // PASS IN FORM DATA
// // app.use(express.urlencoded({ extended: true }));

// // CONTROLLERS

// const EventController = require('./API/controllers/EventController');
// // ROUTES
// app.get('/', EventController.get);
// app.post('/', EventController.create);
// // app.post('/api/event/update', EventController.update);
// // app.get('/api/event/retrieve', EventController.retrieve);
// // app.delete('/api/event/delete', EventController.delete);

// // START SERVER
// app.listen(port, () => {
//   console.log(`Running server on port ${port}`);
// });

