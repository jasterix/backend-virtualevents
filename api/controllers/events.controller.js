const mongoose = require('mongoose');
const Event = require('../models/event');
const { check, validationResult } = require('express-validator');

module.exports = {
  getEvents: getEvents,
  postEvent: postEvent,
};

function getEvents(request, response) {
  Event.find({}, (err, events) => {
    if (err) {
      response.status(404);
      response.send('Events not found!');
    }
    return response.status(200).json(events);
  });
}

function postEvent(request, response, next) {
  if (!request.body.title) {
    return response.status(400).json({
      status: 'error',
      error: 'request body title cannot be empty',
    });
  }

  const event = new Event({
    _id: new mongoose.Types.ObjectId(),
    title: request.body.title,
    startDate: request.body.startDate,
    endDate: request.body.endDate,
    description: request.body.description,
    eventLink: request.body.eventLink,
    eventType: request.body.eventType,
    free: request.body.free,
    techWomen: request.body.techWomen,
    blackTech: request.body.blackTech,
  })
    .save()
    .then((event) => {
      console.log(event._id);
      response.redirect(`events/${event._id}`);
      //   return response.status(201).send({
      //     message: 'Created a new event sucessfully',
      //   });
      console.log(event);
    });
}
