const mongoose = require("mongoose");
const Event = require("../models/event");
const { check, validationResult } = require("express-validator");
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectID;

module.exports = {
  showEditEvent: showEditEvent,
  //   postEvent: postEvent,
  //   getEvent: getEvent,
  //   updateEvent: updateEvent,
  //   deleteEvent: deleteEvent,
  //   deleteAllEvents: deleteAllEvents,
};

function showEditEvent(request, response) {
  Event.findOne({ slug: request.params.slug }, (error, event) => {
    response.render("pages/edit", {
      event: event,
      errors: error,
    });
  });
}
