const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  startDate: Date,
  endDate: Date,
  description: String,
  eventLink: String,
  eventType: String,
  free: { type: Boolean, default: true },
  techWomen: Boolean,
  blackTech: Boolean,
});
module.exports = mongoose.model('Event', EventSchema);
