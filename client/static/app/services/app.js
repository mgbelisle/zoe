define([
    'bower_components/angular/angular',
    'app/common/app'
], function(
    angular,
    commonApp
) {
    'use strict';

    var app = angular.module('zoe.services', ['zoe.common']);

    return app;
});
