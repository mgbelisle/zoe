define([
    'bower_components/angular/angular',
    'bower_components/angular-route/angular-route',
    'bower_components/requirejs-text/text!app/home/template.html',
    'app/services/app',
    'app/support/app'
], function(
    angular,
    angularRoute,
    homeTemplate,
    servicesApp,
    supportApp
) {
    'use strict';

    var app = angular.module('zoe', [
        'ngRoute',
        'zoe.services',
        'zoe.support'
    ]);

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
