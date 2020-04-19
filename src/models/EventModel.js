const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
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
module.exports = mongoose.model('event', EventSchema);
