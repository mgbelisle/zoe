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
            when('/services', {template: fs.readFileSync(__dirname + '/home.html', 'utf8')}).
            when('/services/mobile', {template: fs.readFileSync(__dirname + '/mobile.html', 'utf8'),
                                      controller: require('./mobile.js')}).
            when('/services/pregnancy', {template: fs.readFileSync(__dirname + '/pregnancy.html', 'utf8')}).
            when('/services/pregnancy/symptoms', {template: fs.readFileSync(__dirname + '/pregnancy_symptoms.html', 'utf8')}).
            when('/services/pregnancy/testing', {template: fs.readFileSync(__dirname + '/pregnancy_testing.html', 'utf8')}).
            when('/services/pregnancy/ultrasounds', {template: fs.readFileSync(__dirname + '/pregnancy_ultrasounds.html', 'utf8')}).
            when('/services/pregnancy/abortion', {template: fs.readFileSync(__dirname + '/pregnancy_abortion.html', 'utf8')}).
            when('/services/pregnancy/faq', {template: fs.readFileSync(__dirname + '/pregnancy_faq.html', 'utf8')}).
            when('/services/sti', {redirectTo: '/services/sti/testing'}).
            when('/services/sti/testing', {template: fs.readFileSync(__dirname + '/sti_testing.html', 'utf8')}).
            when('/services/sti/symptoms', {template: fs.readFileSync(__dirname + '/sti_symptoms.html', 'utf8')}).
            when('/services/sti/faq', {template: fs.readFileSync(__dirname + '/sti_faq.html', 'utf8')}).
            when('/services/map', {template: fs.readFileSync(__dirname + '/map.html', 'utf8')});
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
                href: '/support/events',
                text: 'Events'
            },
            {
                href: '/support/',
                text: 'Support Us'
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

app.controller('StiSideNavController', [
    '$scope',
    function($scope) {
        $scope.text = 'STI/STD Testing';
        $scope.navItems = [
            {
                href: '/services/sti/testing',
                text: 'Should I be tested?'
            },
            {
                href: '/services/sti/symptoms',
                text: 'Symptoms'
            },
            {
                href: '/services/sti/faq',
                text: 'FAQ'
            }
        ];
    }
]);
