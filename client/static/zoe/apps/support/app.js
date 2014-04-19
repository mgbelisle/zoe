define([
    'bower_components/angular/angular',
    'bower_components/angular-route/angular-route',
    'app/common/app'
], function(
    angular,
    angularRoute,
    commonApp
) {
    'use strict';

    var app = angular.module('zoe.support', [
        'ngRoute',
        'zoe.common'
    ]);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/support/', {template: 'This is support'});
    }]);

    return app;
});
