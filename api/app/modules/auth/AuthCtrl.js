var express = require('express');

var Service  = require('./AuthService');

var app 	= express();

//module.exports = function(app, passport) {

  var service = new Service();

  
  app.post('/', service.post);
  app.get('/', service.get);
module.exports = app