// var angular = require('angular'); // TODO
// var angularRoute = require('angular-route'); // TODO
var angular = require('angular-tmp');
var bootstrap = require('bootstrap-tmp');

var NAME = 'zoe.services';

var app = angular.module(NAME, [
    // 'ngRoute', // TODO
    require('../common/app')
]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/services', {template: 'This is services'});
}]);

app.run(['headerService', function(headerService) {
    headerService.setNavbarItems(
        '/services(/.*)?',
        [
            {
                href: '/services/pregnancy',
                matchRoute: '/services(/.*)?',
                text: 'Pregnancy'
            },
            {
                href: '/services/sti',
                matchRoute: '/services/sti(/.*)?',
                text: 'STD Testing'
            },
            {
                href: '/contact',
                matchRoute: '/contact(/.*)?',
                text: 'Contact Us'
            }
        ]);
}]);

module.exports = NAME;
