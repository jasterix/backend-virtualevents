const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Event = require('../models/event');
const mainController = require('../controllers/main.controller');
const eventsController = require('../controllers/events.controller');

// showCreate HOME PAGE / MAIN CONTROLLER
router.get('/home', mainController.showHome);

// SHOW NEW EVENT FORM PAGE / MAIN CONTROLLER
router.get('/new', mainController.showCreate);

// GET ALL EVENTS / EVENTS CONTROLLER
router.get('/', eventsController.getEvents);

// CREATE EVENT / EVENT CONTROLLER
router.post('/new', eventsController.postEvent);

// GET EVENT PAGE/ MAIN CONTROLLER
router.get('/:event_id', eventsController.getEvent);

// PUT EVENT / EVENT CONTROLLER
router.put('/:event_id', eventsController.updateEvent);

// DELETE EVENT / EVENT CONTROLLER
router.delete('/:event_id', eventsController.deleteEvent);

// DELETE ALL EVENTS / EVENT CONTROLLER
router.delete('/deleteAll', eventsController.deleteAllEvents);

module.exports = router;
