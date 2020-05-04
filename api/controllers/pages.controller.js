const mongoose = require("mongoose");
const Event = require("../models/event");
const { check, validationResult } = require("express-validator");
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectID;

module.exports = {
  showEditEvent: showEditEvent,
  showAllEvents: showAllEvents,
  //   postEvent: postEvent,
  //   getEvent: getEvent,
  //   updateEvent: updateEvent,
  //   deleteEvent: deleteEvent,
  //   deleteAllEvents: deleteAllEvents,
};

function showEditEvent(request, response) {
  Event.findOne({ id: request.params.id }, (error, event) => {
    response.render("pages/edit", {
      event: event,
      errors: error,
    });
  });
}

function showAllEvents(request, response) {
  console.log("here");

  Event.find({}, (error, events) => {
    if (error) {
      console.log(error);
    }
  })
    .then((data) => {
      response.render("pages/allEvents", {
        events: data,
      });
    })
    .catch(next);
}
