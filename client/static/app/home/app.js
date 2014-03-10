define([
    'angular',
    'app/home/app',
    'app/services/app',
    'app/support/app'
], function(
    angular,
    _home,
    _services,
    _support
) {
    'use strict';

    var app = angular.module('zoe', [
        'zoe.home',
        'zoe.services',
        'zoe.support'
    ]);

    return app;
});
