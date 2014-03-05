'use strict';

require.config({
    baseUrl: '../..',
    name: 'bower_components/almond/almond',
    include: 'js/src/main',
    optimize: 'uglify2',
    out: '../build.js',
    paths: {
        angular: 'bower_components/angular/angular'
    },
    shim: {
        angular: {
            exports: 'angular'
        }
    }
});

require([
    'angular',
    'js/src/app'
], function(
    angular,
    app
) {
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['zoe']);
    });
});
