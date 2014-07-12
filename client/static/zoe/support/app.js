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
        var staffConfig = {
            template: fs.readFileSync(__dirname + '/html/about_staff.html', 'utf8'),
            controller: require('./staff/controller.js')
        };
        $routeProvider.
            when('/support', {redirectTo: '/support/help'}).
            when('/support/about', {template: fs.readFileSync(__dirname + '/html/about.html', 'utf8')}).
            when('/support/about/staff', staffConfig).
            when('/support/about/staff/:key', staffConfig).
            when('/support/help', {template: fs.readFileSync(__dirname + '/html/help.html', 'utf8')}).
            when('/support/stories', {redirectTo: '/support/stories/fiona'}).
            when('/support/stories/fiona', {template: fs.readFileSync(__dirname + '/html/stories_fiona.html', 'utf8')}).
            when('/support/dash', {template: fs.readFileSync(__dirname + '/../common/html/dash.html', 'utf8')}).
            when('/support/contact', {template: fs.readFileSync(__dirname + '/html/contact.html', 'utf8')});
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
                href: '/support/stories',
                text: 'Stories'
            },
            {
                href: '/support/dash',
                text: "'Stache Dash",
                'class': 'zoe-dash-nav'
            },
            {
                href: '/support/contact',
                text: 'Contact Us'
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
