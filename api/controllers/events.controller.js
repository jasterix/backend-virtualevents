const Event = require('../models/event');

module.exports = {
  getEvents: getEvents,
};

function getEvents(request, response) {
  Event.find({}, (err, events) => {
    if (err) {
      res.status(404);
      res.send('Events not found!');
    }
    return response.status(200).json(events);
  });
}
