define([
    'angular',
    'app/common/body/directive'
], function(
    angular,
    bodyDirective
) {
    'use strict';

    var app = angular.module('zoe.common', []);

    // Directives
    app.directive('zoeBody', bodyDirective);

    return app;
});
