// var angular = require('angular'); // TODO
// var angularRoute = require('angular-route'); // TODO
var angular = require('angular-tmp');

var NAME = 'zoe.services';

var app = angular.module(NAME, [
    // 'ngRoute', // TODO
    require('../common/app'),
]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/services/', {template: 'This is services'});
}]);

module.exports = NAME;
