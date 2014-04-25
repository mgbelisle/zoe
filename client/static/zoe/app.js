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
        when('/:kingdom?/:phylum?/:class?/:order?/:family?/:genus?/:species?', {templateUrl: 'body.html'}).
        otherwise({redirectTo: '/'});
}]);

app.run(require('./header.js'));
app.run(require('./content.js'));

module.exports = NAME;
