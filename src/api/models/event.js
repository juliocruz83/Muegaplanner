var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    notes: {
      type: String,
      required: true
    },
    calendar: {
      type: String,
      required: true
    },
    startDateTime: {
      type: Date,
      required: true
    },
    endDateTime: {
      type: Date,
      required: true
    },
  });

  mongoose.model('Event', eventSchema);