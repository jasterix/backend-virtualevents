const mongoose = require('mongoose');

const eventSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String },
    eventType: { type: String },
    website: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Event', eventSchema);
