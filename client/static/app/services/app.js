var angular = require('angular');
var angularRoute = require('angular-route');
var commonApp = require('../common/app');

var app = angular.module('zoe.services', [
    'ngRoute',
    'zoe.common'
]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/services/', {template: 'This is services'});
}]);

module.exports = app;
