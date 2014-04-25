var NAME = 'zoe';

var angular = require('angular');
var angularRoute = require('angular-route');
var bootstrap = require('bootstrap'); // Just needs included once

var app = angular.module(NAME, [
    'ngRoute',
    require('./apps/common/app.js'),
    require('./apps/services/app.js')
    // require('./apps/support/app.js')
]);

// Routes
app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
}]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/:kingdom?/:phylum?/:class?/:order?/:family?/:genus?/:species?',
             {templateUrl: '/static/zoe/body.html'}).
        otherwise({redirectTo: '/'});
}]);

app.run(['headerService', function(headerService) {
    var items = [
        {
            href: '/services',
            params: {kingdom: 'services'},
            text: 'Services'
        },
        {
            href: '/support',
            params: {kingdom: 'support'},
            text: 'Support'
        },
        {
            href: '/dash',
            params: {kingdom: 'dash'},
            text: 'Stache Dash'
        },
        {
            href: '/contact',
            params: {kingdom: 'contact'},
            text: 'Contact Us'
        }
    ];
    headerService.setNavItems({kingdom: undefined}, items);
    headerService.setNavItems({kingdom: 'contact'}, items);
}]);

module.exports = NAME;
