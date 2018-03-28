const express = require("express");
const mongoose = require("mongoose");

const home = require("./routes/home");
const contacts = require("./routes/contacts");

// create application
const app = express();
app.set('view engine', 'pug');

app.use("/", home);
app.use("/contacts", contacts);

// Connect mongo database
const mongodb_uri = process.env.MONGODB_URI || 'mongodb://localhost/test';
mongoose.connect(mongodb_uri, function (error) {
  if (error) console.error(error);
  else console.log('MongoDB connected.');
});

// start application
const port = process.env.PORT || 3000
app.listen(port, function() {
    console.log("Server listening on port %s.", port);
});
