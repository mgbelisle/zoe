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

// Routes
app.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {template: '', controller: require('./home.js')}).
            when('/privacy', {template: fs.readFileSync(__dirname + '/privacy.html', 'utf8'),
                              controller: require('./privacy.js')}).
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
