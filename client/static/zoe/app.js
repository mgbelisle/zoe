var NAME = 'zoe';

var angular = require('angular');
var angularRoute = require('angular-route');

var app = angular.module(NAME, [
    'ngRoute',
    require('./apps/common/app'),
    // require('./apps/services/app'),
    // require('./apps/support/app')
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
    headerService.setNavItems(
        {}, // Visible for all params
        [
            {
                params: {kingdom: 'contact'},
                href: '/contact',
                text: 'Contact Us'
            }
        ]
    );
}]);

module.exports = NAME;
