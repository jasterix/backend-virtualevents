const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Event = require('../models/event');
const mainController = require('../controllers/main.controller');
const eventsController = require('../controllers/events.controller');

// GET HOME PAGE / MAIN CONTROLLER
router.get('/home', mainController.getHome);

// GET ALL EVENTS / EVENTS CONTROLLER
router.get('/', eventsController.getEvents);

////////////////////Show form to create event
router.get('/new', (request, response, next) => {
  response.render('pages/create');
});
///////////////////////// CREATE one event
router.post('/new', (request, response, next) => {
  console.log(request.body);
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
  });
  if (!request.body.title) {
    return response.status(400).json({
      status: 'error',
      error: 'request body title cannot be empty',
    });
  }
  event
    .save()
    .then((result) => {
      response.redirect('/events');
      return response.status(201).send({
        message: 'Created a new event sucessfully',
      });
    })
    .catch((error) => {
      response.status(500).json({
        error: error + ' error here',
      });
      console.log(error);
    });
});

//////////////////////////GET all events
// router.get('/', (request, response, next) => {
//   Event.find()
//     .exec()
//     .then((docs) => {
//       console.log(docs);
//       response.render('pages/home');
//       return response.status(200).json(docs);
//     })
//     .catch((error) => {
//       console.log(error);
//       response.status(500).json({
//         error: error,
//       });
//     });
// });

////////////////////////////// GET one event by ID
router.get('/:eventId', (request, response, next) => {
  const id = request.params.eventId;
  Event.findById(id)
    .deleteMany()
    .exec()
    .then((doc) => {
      console.log('From database', doc);
      if (doc) {
        response.status(200).json(doc);
      } else {
        response
          .status(404)
          .json({ message: 'No valid entry found for provided ID' });
      }
    })
    .catch((err) => {
      console.log(err);
      response.status(500).json({ error: err });
    });
});

/////////////////// PATCH one event
router.patch('/:eventId', (request, res, next) => {
  const id = request.params.eventId;
  const updateOperations = {};
  for (const operations of request.body) {
    updateOperations[operations.propName] = operations.value;
  }
  Event.update({ _id: id }, { $set: updateOperations })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

/////////////////// DELETE one event
router.delete('/:eventId', (request, response, next) => {
  const id = request.params.eventId;
  Event.remove({ _id: id })
    .exec()
    .then((result) => {
      response.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
      response.status(500).json({
        error: error,
      });
    });
});

/////////////////// DELETE all events

router.get('/destroy', (request, response, next) => {
  try {
    // db.events.deleteMany({});
    console.log(db.events.find({}));

    db.events.find({}).forEach((event) => db.events.remove({ _id: event._id }));
  } catch (e) {
    response.status(500).json();
  }
});

module.exports = router;
