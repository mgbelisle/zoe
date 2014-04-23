// var angular = require('angular'); // TODO
// var angularRoute = require('angular-route'); // TODO
var angular = require('angular-tmp');
var commonApp = require('../common/app');

var app = angular.module('zoe.services', [
    // 'ngRoute', // TODO
    'zoe.common'
]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/services/', {template: 'This is services'});
}]);

module.exports = app;
