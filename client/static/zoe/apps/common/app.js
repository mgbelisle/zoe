var NAME = 'zoe.common';

var angular = require('angular');

var app = angular.module(NAME, []);

// Directives
app.directive('zoeHeader', require('./header/directive.js'));

// Services
app.service('urlService', require('./services/url.js'));
app.service('headerService', require('./header/service.js'));

module.exports = NAME;
