// var angular = require('angular'); // TODO
var angular = require('angular-tmp');

var APP_NAME = 'zoe.common';

var app = angular.module(APP_NAME, []);

app.directive('zoeHeader', require('./header/directive.js'));
app.service('headerService', require('./header/service.js'));

module.exports = APP_NAME;
