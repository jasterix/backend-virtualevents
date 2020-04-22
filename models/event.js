const mongoose = require('mongoose');

const eventSchema = mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Event', eventSchema);
