var NAME = 'zoe';
module.exports = NAME;

require('angular-route'); // Just needs included once
require('bootstrap'); // Just needs included once
var angular = require('angular');
var fs = require('fs');

var app = angular.module(NAME, [
    'ngRoute',
    require('./common/app.js'),
    require('./services/app.js')
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
            otherwise({redirectTo: '/'}).
            when('/', {template: fs.readFileSync(__dirname + '/html/home.html', 'utf8')}).
            when('/dash', {template: fs.readFileSync(__dirname + '/html/dash.html', 'utf8')}).
            when('/contact', {template: fs.readFileSync(__dirname + '/html/contact.html', 'utf8')});
    }
]);

// Header
app.controller('RootHeaderController', [
    '$scope',
    function($scope) {
        $scope.navItems = [
            {
                href: '/services',
                text: 'Services'
            },
            {
                href: '/support',
                text: 'Support'
            },
            {
                href: '/dash',
                text: 'Stache Dash'
            },
            {
                href: '/contact',
                text: 'Contact Us'
            }
        ];
    }
]);
