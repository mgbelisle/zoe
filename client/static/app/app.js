define([
    'angular',
    'angularRoute',
    'text!app/home/template.html',
    'app/services/app',
    'app/support/app'
], function(
    angular,
    angularRoute,
    homeTemplate,
    _services,
    _support
) {
    'use strict';

    var app = angular.module('zoe', [
        'zoe.services',
        'zoe.support'
    ]);

    console.log(angularRoute);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', {template: homeTemplate}).
            otherwise({redirectTo: '/'});
    }]);

    app.config(['$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode(true);
    }]);

    return app;
});
