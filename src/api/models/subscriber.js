var mongoose = require('mongoose');

var subscriberSchema = new mongoose.Schema({
    name: {
      type: String,
      unique: true,
      required: true
    },
    calendars: {
      type: Array,
      required: true
    }
  });

  mongoose.model('Subscriber', subscriberSchema);