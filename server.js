const http = require('http');
const app = require('./app');
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const seedEvent = require('./seeds/eventSeed.js');
const path = require('path');

// // serve static assets when in production
// if (process.env.NODE_ENV === 'production') {
//   // Set static folder
//   app.use(express.static('client/build'));
//   app.get('*', (request, response) => {
//     response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// } else {
// }

// Tell express where to look for static assets
app.use(express.static(__dirname + '/public'));

// Set EJS as templating engine
app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);

module.exports = app;
