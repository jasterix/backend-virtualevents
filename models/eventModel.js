const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventModel = new Schema({
  title: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  signupLink: { type: String },
  audience: { type: String },
  read: { type: Boolean, default: false },
});

module.exports = mongoose.model('Event', eventModel);
