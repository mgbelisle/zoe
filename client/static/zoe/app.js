var NAME = 'zoe';
module.exports = NAME;

require('angular-route'); // Just needs included once
require('bootstrap'); // Just needs included once
var angular = require('angular');

var app = angular.module(NAME, [
    'ngRoute',
    require('./home/app.js'),
    require('./services/app.js'),
    require('./dash/app.js'),
    require('./contact/app.js')
]);

// Routes - Params are available by their biological taxonomy names
app.config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
        var fs = require('fs');
        $locationProvider.html5Mode(true);
        $routeProvider.
            when('/:kingdom?/:phylum?/:class?/:order?/:family?/:genus?/:species?',
                 {template: fs.readFileSync(__dirname + '/view.html', 'utf8')}).
            otherwise({redirectTo: '/'});
    }
]);

app.run([
    'headerService',
    function(
        headerService
    ) {
        var headerNavItems = [
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
        headerService.setNavItems({kingdom: undefined}, headerNavItems);
        headerService.setNavItems({kingdom: 'contact'}, headerNavItems);
        headerService.setNavItems({kingdom: 'dash'}, headerNavItems);
    }
]);
