const mongoose = require('mongoose');

const moodTrackerSchema = new mongoose.Schema({
  howareyou: {
    type: String,
    required: true,
  },
  whatyoufeel: {
    type: [String], // defining an array of strings
    required: true,
  },
  whyyoufeelthisway: {
    type: [String], // defining an array of strings
    required: true,
  },
  expressyourself: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('moodtracker', moodTrackerSchema);
