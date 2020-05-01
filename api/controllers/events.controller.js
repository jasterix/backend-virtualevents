const mongoose = require("mongoose");
const Event = require("../models/event");
const { check, validationResult } = require("express-validator");
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectID;

module.exports = {
  getEvents: getEvents,
  postEvent: postEvent,
  getEvent: getEvent,
  updateEvent: updateEvent,
  deleteEvent: deleteEvent,
  deleteAllEvents: deleteAllEvents,
};

function getEvents(request, response, next) {
  Event.find({}, (error, events) => {
    if (error) {
      console.log(error);
    }
  })
    .then((data) => response.json(data))
    .catch(next);
}

function postEvent(request, response, next) {
  if (!request.body.title) {
    return response.status(400).json({
      status: "error",
      error: "Request body cannot be empty",
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
    .then((data) => {
      response.json({
        message: "Created a new event sucessfully",
        event: data,
      });
    })
    .then(response.render("pages/create"))

    .catch(next);
}

function getEvent(request, response, next) {
  let id = request.params.event_id;
  let event = Event.findById(id);

  Event.find({ _id: ObjectId(id) }, (error, event) => {
    if (error) {
      response.status(404);
      response.send("Events not found!");
    }
    response.render("pages/event", {
      event: event[0],
      string: "hello",
    });
  });
}

function updateEvent(request, response, next) {
  const id = request.params.event_id;
  const params = request.body;
  const updatedEvent = { _id: request.params.id };

  for (const [key, value] of Object.entries(params)) {
    updatedEvent[key] = value;
  }

  Event.findOneAndUpdate(
    { _id: id },
    request.body,
    { upsert: false, new: true, runValidators: true, useFindAndModify: false }, // options
    function (error, updatedEvent) {
      // callback
      if (error) {
        response.status(404);
        response.send("Events not found!");
      }
    }
  ).then((data) =>
    response.json({
      message: "Event updated successfully",
      event: updatedEvent,
    })
  );
}

function deleteEvent(request, response, next) {
  const id = request.params.event_id;
  Event.deleteOne({ _id: id }, (error) => {
    if (error) {
      response.json({
        error: "Event not found",
      });
    }
  }).then((data) =>
    response
      .json({
        message: "Event deleted",
        event: data,
      })
      .catch(next)
  );
}

function deleteAllEvents(request, response) {
  Event.deleteMany({}, function (error) {
    if (error) {
      response.json({
        error: "Event not found",
      });
    }
    response.json({
      message: `Deleted all events`,
    });
  });
}
