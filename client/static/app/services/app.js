var angular = require('../../bower_components/angular/angular');
var angularRoute = require('../../bower_components/angular-route/angular-route');
var commonApp = require('../../app/common/app');

var app = angular.module('zoe.services', [
    'ngRoute',
    'zoe.common'
]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/services/', {template: 'This is services'});
}]);

module.exports = app;
