define([
    'angular',
    'app/services/app',
    'app/support/app'
], function(
    angular,
    _services,
    _support
) {
    'use strict';

    var app = angular.module('zoe', [
        'zoe.services',
        'zoe.support'
    ]);

    app.config(['$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode(true);
    }]);

    return app;
});
