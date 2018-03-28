const mongoose = require("mongoose");

var contactSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: false
  },
  tracker: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Contact', contactSchema);