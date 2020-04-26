const Event = require('../models/event');

module.exports = {
  showHome: (request, response) => {
    response.render('pages/home');
  },
  showCreate: (request, response) => {
    response.render('pages/create');
  },
};
