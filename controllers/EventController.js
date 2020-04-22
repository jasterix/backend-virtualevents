const Event = require('../models/Event');

module.exports = {
  create: (req, res) => {
    let event = new Event({
      _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
    });

    event
      .save()
      .then((result) => {
        res.json({ success: true, result: result });
      })
      .catch((err) => {
        res.json({ success: false, result: err });
      });
  },
  update: (req, res) => {
    Event.update({ _id: req.body._id }, req.body)
      .then((event) => {
        if (!event)
          res.json({ success: false, result: 'Event does not exist' });

        res.json(event);
      })
      .catch((err) => {
        res.json({ success: false, result: err });
      });
  },
  retrieve: (req, res) => {
    Event.find()
      .then((result) => {
        if (!result) res.json({ success: false, result: 'No results found' });

        res.json({ success: true, result: result });
      })
      .catch((err) => res.json({ success: false, result: err }));
  },
  delete: (req, res) => {
    Event.remove({ _id: req.body._id })
      .then((result) => {
        if (!result)
          res.json({
            success: false,
            result: 'No event was found with the ID',
          });
        res.json({ success: true, result: result });
      })
      .catch((err) => res.json({ success: false, result: err }));
  },
};
