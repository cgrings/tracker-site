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
  session: {
    type: String,
    required: true
  },
  user: {
    type: String
  }
});

module.exports = mongoose.model('pageView', pageViewSchema);
