var angular = require('../bower_components/angular/angular');
var angularRoute = require( '../bower_components/angular-route/angular-route');
// var servicesApp = require('app/services/app');
// var supportApp = require('app/support/app');

var app = angular.module('zoe', [
    'ngRoute'
    // 'zoe.services',
    // 'zoe.support'
]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {templateUrl: 'app/home/template.html'}).
        otherwise({redirectTo: '/'});
}]);

app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
}]);

module.exports = app;
