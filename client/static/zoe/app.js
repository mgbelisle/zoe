var NAME = 'zoe';
module.exports = NAME;

require('angular-route'); // Just needs included once
require('bootstrap'); // Just needs included once
var angular = require('angular');

var app = angular.module(NAME, [
    'ngRoute',
    require('./home/app.js'),
    require('./contact/app.js'),
    require('./services/app.js')
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
                 {template: fs.readFileSync(__dirname + '/body.html', 'utf8')}).
            otherwise({redirectTo: '/'});
    }
]);
