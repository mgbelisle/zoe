var NAME = 'zoe';
module.exports = NAME;

require('angular-route'); // Just needs included once
require('bootstrap'); // Just needs included once
var angular = require('angular');
var fs = require('fs');

var app = angular.module(NAME, [
    'ngRoute',
    require('./common/app.js'),
    require('./services/app.js'),
    require('./support/app.js')
]);

// HTML5 mode for URLs
app.config([
    '$locationProvider',
    function($locationProvider) {
        $locationProvider.html5Mode(true);
    }
]);

// Routes - Params are available by their biological taxonomy names
app.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {template: fs.readFileSync(__dirname + '/html/home.html', 'utf8')}).
            otherwise({redirectTo: '/'});
    }
]);

// Header
app.controller('HomeHeaderController', [
    '$scope',
    function($scope) {
        $scope.showSearch = false;
        $scope.navItems = [];
    }
]);
