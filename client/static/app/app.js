var fs = require('fs');
var angular = require('angular');
var servicesApp = require('./services/app');
var homeTemplate = fs.readFileSync('./home/template.html');
// var supportApp = require('../app/support/app');

var app = angular.module('zoe', [
    'ngRoute',
    'zoe.services'
    // 'zoe.support'
]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {template: homeTemplate}).
        otherwise({redirectTo: '/'});
}]);

app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
}]);

module.exports = app;
