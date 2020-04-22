const http = require('http');
const app = require('./app');
const seedEvent = require('./seeds/eventSeed.js');
const path = require('path');

// serve static assets when in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
} else {
}

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);

module.exports = app;
