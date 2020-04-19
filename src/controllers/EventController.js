const EventModel = require('../models/EventModel');

module.exports = {
  create: (req, res) => {
    let event = new EventModel({
      title: req.body.title,
      // startDate: req.body.startDate,
      // endDate: req.body.endDate,
      // description: req.body.description,
      // eventLink: req.body.eventLink,
      // eventType: req.body.eventType,
      // free: req.body.free,
      // techWomen: req.body.techWomen,
      // blackTech: req.body.blackTech,
    });
    event
      .save()
      .then((result) => {
        console.log('reached here');
        res.json({ success: true, result: result });
      })
      .catch((err) => {
        res.json({ success: false, result: err });
      });
  },
};
