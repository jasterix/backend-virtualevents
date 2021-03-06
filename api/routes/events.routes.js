const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Event = require("../models/event");
const mainController = require("../controllers/main.controller");
const eventsController = require("../controllers/events.controller");
const pagesController = require("../controllers/pages.controller");

// showCreate HOME PAGE / MAIN CONTROLLER
router.get("/home", mainController.showHome);

// SHOW NEW EVENT FORM PAGE / MAIN CONTROLLER
router.get("/new", mainController.showCreate);

// GET ALL EVENTS / EVENTS CONTROLLER
router.get("/", eventsController.getEvents);

// SHOW ALL EVENTS PAGE / PAGE CONTROLLER
router.get("/allEvents", pagesController.showAllEvents);

// CREATE EVENT / EVENT CONTROLLER
router.post("/new", eventsController.postEvent);

// GET EVENT PAGE/ MAIN CONTROLLER
router.get("/:id", eventsController.getEvent);

// GET EDIT EVENT PAGE/ PAGE CONTROLLER
router.get("/:id/edit", pagesController.showEditEvent);

// PUT EVENT / EVENT CONTROLLER
router.post("/:id", eventsController.updateEvent);

// DELETE EVENT / EVENT CONTROLLER
router.post("/delete/:id", eventsController.deleteEvent);

// DELETE ALL EVENTS / EVENT CONTROLLER
router.delete("/deleteAll", eventsController.deleteAllEvents);

module.exports = router;
