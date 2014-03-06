define([
    'angular',
    'app/home/app'
], function(
    angular,
    home
) {
    'use strict';

    var app = angular.module('zoe', [
        'zoe.home'
    ]);

    app.config(['$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode(true);
    }]);

    return app;
});
