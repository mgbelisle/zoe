var NAME = 'zoe.common';

var angular = require('angular');

var app = angular.module(NAME, []);

// Directives
app.directive('zoeHeader', require('./header/directive.js'));
app.directive('zoeHref', require('./directives/href.js'));

// Services
app.service('headerService', require('./header/service.js'));
app.service('urlService', require('./services/url.js'));

module.exports = NAME;
