var angular = require('angular');
var navbarDirective = require('./navbar/directive.js');

var app = angular.module('zoe.common', []);

// Directives
app.directive('zoeNavbar', navbarDirective);

module.exports = app;
