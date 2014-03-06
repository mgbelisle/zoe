'use strict';

require.config({
    baseUrl: '../..',
    include: 'bower_components/almond/almond',
    generateSourceMaps: true,
    name: 'js/src/main',
    optimize: 'uglify2',
    out: '../build.js',
    paths: {
        angular: 'bower_components/angular/angular'
    },
    preserveLicenseComments: false,
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
