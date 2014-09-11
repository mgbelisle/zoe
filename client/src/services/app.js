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
            when('/services/pregnancy', {template: fs.readFileSync(__dirname + '/html/pregnancy.html', 'utf8')}).
            when('/services/pregnancy/symptoms', {template: fs.readFileSync(__dirname + '/html/pregnancy_symptoms.html', 'utf8')}).
            when('/services/pregnancy/testing', {template: fs.readFileSync(__dirname + '/html/pregnancy_testing.html', 'utf8')}).
            when('/services/pregnancy/ultrasounds', {template: fs.readFileSync(__dirname + '/html/pregnancy_ultrasounds.html', 'utf8')}).
            when('/services/pregnancy/abortion', {template: fs.readFileSync(__dirname + '/html/pregnancy_abortion.html', 'utf8')}).
            when('/services/pregnancy/faq', {template: fs.readFileSync(__dirname + '/html/pregnancy_faq.html', 'utf8')}).
            when('/services/sti', {redirectTo: '/services/sti/testing'}).
            when('/services/sti/testing', {template: fs.readFileSync(__dirname + '/html/sti_testing.html', 'utf8')}).
            when('/services/sti/symptoms', {template: fs.readFileSync(__dirname + '/html/sti_symptoms.html', 'utf8')}).
            when('/services/sti/faq', {template: fs.readFileSync(__dirname + '/html/sti_faq.html', 'utf8')}).
            when('/services/map', {template: fs.readFileSync(__dirname + '/html/map.html', 'utf8')});
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
                href: 'https://zoecare.nonprofiteasy.net/PublicPages/Donation/ViewAll.aspx?mid=306',
                text: 'Programs'
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
