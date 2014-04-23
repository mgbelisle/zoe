// var angular = require('angular'); // TODO
// var angularRoute = require( 'angular-route'); // TODO
var angular = require('angular-tmp'); // TODO

var NAME = 'zoe';

var app = angular.module(NAME, [
    // 'ngRoute', // TODO
    require('./apps/common/app'),
    require('./apps/services/app')
    // require('./apps/support/app') // TODO
]);

// Routes
app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
}]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {templateUrl: '/static/zoe/home/template.html'}).
        otherwise({redirectTo: '/'});
}]);

// Directives
app.directive('zoeFooter', require('./footer/directive.js'));
app.directive('zoeHeader', require('./header/directive.js'));
app.directive('zoeHome', require('./home/directive.js'));

module.exports = NAME;
