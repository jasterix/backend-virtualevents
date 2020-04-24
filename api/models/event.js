const mongoose = require('mongoose');

const eventSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    date: String,
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

// middleware

// eventSchema.pre( "save", function ( next ) {
//   this.date = function mergeDate(this.startDate, this.endDate)
// })

module.exports = mongoose.model('Event', eventSchema);

function mergeDate(startDate, endDate) {
  return `${startDate} - ${endDate}`;
}
