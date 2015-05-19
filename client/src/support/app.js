var NAME = 'zoe.support';
module.exports = NAME;

var angular = require('angular');
var fs = require('fs');

var app = angular.module(NAME, [
    require('../common/app.js')
]);

// Routes
app.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/support', {redirectTo: '/support/help'}).
            when('/support/about', {template: fs.readFileSync(__dirname + '/about.html', 'utf8')}).
            when('/support/about/staff', {
                template: fs.readFileSync(__dirname + '/about_staff.html', 'utf8'),
                controller: require('./staff/controller.js')
            }).
            when('/support/help', {template: fs.readFileSync(__dirname + '/help.html', 'utf8')}).
            when('/support/stories', {redirectTo: '/support/stories/fiona'}).
            when('/support/stories/fiona', {template: fs.readFileSync(__dirname + '/stories_fiona.html', 'utf8')}).
            when('/support/map', {template: fs.readFileSync(__dirname + '/map.html', 'utf8')}).
            when('/support/events', {
                template: fs.readFileSync(__dirname + '/events.html', 'utf8'),
                controller: require('./events.js')
            });
    }
]);

// Header
app.controller('SupportHeaderController', [
    '$scope',
    function(
        $scope
    ) {
        $scope.navItems = [
            {
                href: '/support/about',
                text: 'About Us'
            },
            {
                href: '/support/help',
                text: 'Ways to Help'
            },
            {
                href: '/support/openhouse',
                text: 'Open House'
            },
            {
                href: '/support/stories',
                text: 'Stories'
            },
            {
                href: '/support/events',
                text: 'Events'
            }
        ];
    }
]);

// Side nav
app.controller('AboutSideNavController', [
    '$scope',
    function($scope) {
        $scope.text = 'About Us';
        $scope.navItems = [
            {
                href: '/support/about/staff',
                text: 'Staff'
            }
        ];
    }
]);

app.controller('StoriesSideNavController', [
    '$scope',
    function($scope) {
        $scope.text = 'ZoeCare Stories';
        $scope.navItems = [
            {
                href: '/support/stories/fiona',
                text: 'Fiona Bennett'
            }
        ];
    }
]);
