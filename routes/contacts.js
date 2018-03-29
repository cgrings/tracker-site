const express = require("express");
const mongoose = require("mongoose");
const Contact = require("../models/contact");
const PageView = require("../models/pageView");

const router = express.Router();


router.get('/', function (req, res) {
  //var contacts = [{id:1,name:"foo"},{id:2,name:"bar"}];
  Contact.find(function(err, contacts) {
    // check errors
    if(err) {
      console.log(err);
      throw err;
    }
    res.render('contacts', { title: 'Contacts', message: 'Contact List!', contacts: contacts })
  });
})

router.get('/:user/pages', function (req, res) {
  var user = req.params.user;
  PageView.aggregate([
    {$match:{"user":user}},
    {$group:{"_id":"$url","count":{$sum:1}}}
  ],
  function(err, pages) {
    // check errors
    if(err) {
      console.log(err);
      throw err;
    }
    res.render('pages', { title: 'Contacts', message: 'Contact Visited Pages!', pages: pages})
  });
})

// exports
module.exports = router;
