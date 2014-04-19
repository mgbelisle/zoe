var angular = require('angular');
var angularRoute = require( 'angular-route');
var servicesApp = require('./services/app');
// var supportApp = require('../app/support/app');

var app = angular.module('zoe', [
    'ngRoute',
    'zoe.services'
    // 'zoe.support'
]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {templateUrl: '/static/app/home/template.html'}).
        otherwise({redirectTo: '/'});
}]);

app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
}]);

module.exports = app;
