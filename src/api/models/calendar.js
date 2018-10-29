var mongoose = require('mongoose');

var calendarSchema = new mongoose.Schema({
    name: {
      type: String,
      unique: true,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  });

  mongoose.model('Subscriber', calendarSchema);