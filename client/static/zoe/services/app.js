var NAME = 'zoe.services';
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
            when('/services', {template: fs.readFileSync(__dirname + '/html/home.html', 'utf8')}).
            when('/services/pregnancy', {template: fs.readFileSync(__dirname + '/html/pregnancy/home.html', 'utf8')}).
            when('/services/pregnancy/symptoms', {template: fs.readFileSync(__dirname + '/html/pregnancy/symptoms.html', 'utf8')}).
            when('/services/pregnancy/testing', {template: fs.readFileSync(__dirname + '/html/pregnancy/testing.html', 'utf8')}).
            when('/services/sti', {template: fs.readFileSync(__dirname + '/html/sti/home.html', 'utf8')}).
            when('/services/contact', {template: fs.readFileSync(__dirname + '/html/contact.html', 'utf8')});
    }
]);

// Header
app.controller('ServicesHeaderController', [
    '$scope',
    function(
        $scope
    ) {
        $scope.navItems = [
            {
                href: '/services/pregnancy',
                text: 'Pregnancy'
            },
            {
                href: '/services/sti',
                text: 'STD Testing'
            },
            {
                href: '/services/contact',
                text: 'Contact Us'
            }
        ];
    }
]);

// Side nav
app.controller('PregnancySideNavController', [
    '$scope',
    function($scope) {
        $scope.text = 'Pregnancy';
        $scope.navItems = [
            {
                href: '/services/pregnancy/symptoms',
                text: 'Signs and Symptoms'
            },
            {
                href: '/services/pregnancy/testing',
                text: 'Testing'
            },
            {
                href: '/services/pregnancy/ultrasounds',
                text: 'Ultrasounds'
            },
            {
                href: '/services/pregnancy/abortion',
                text: 'Abortion'
            },
            {
                href: '/services/pregnancy/faq',
                text: 'FAQ'
            }
        ];
    }
]);
