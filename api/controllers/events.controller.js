const Event = require('../models/event');

module.exports = {
  getEvents: getEvents,
};

function getEvents(req, res) {
  // get all events
  Event.find()
    .exec()
    .then((docs) => {
      console.log(docs);
      response.render('pages/home');
      return response.status(200).json(docs);
    })
    .catch((error) => {
      console.log(error);
      response.status(500).json({
        error: error,
      });
    });
}
