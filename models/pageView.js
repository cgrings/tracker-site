const mongoose = require("mongoose");

var pageViewSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true,
  },
  tracker: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('pageView', pageViewSchema);