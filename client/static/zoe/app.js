// var angular = require('angular'); // TODO
// var angularRoute = require( 'angular-route'); // TODO
var angular = require('angular-tmp');
var commonApp = require('./apps/common/app');
var servicesApp = require('./apps/services/app');
// var supportApp = require('./apps/support/app');

var app = angular.module('zoe', [
    // 'ngRoute', // TODO
    'zoe.common',
    'zoe.services'
    // 'zoe.support'
]);

// Routes
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {templateUrl: '/static/zoe/home/template.html'}).
        otherwise({redirectTo: '/'});
}]);

app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
}]);

// Directives
app.directive('zoeHeader', require('./header/directive.js'));

module.exports = app;
