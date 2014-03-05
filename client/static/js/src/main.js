'use strict';

require.config({
    baseUrl: '../..',
    include: 'js/src/main',
    generateSourceMaps: true,
    name: 'bower_components/almond/almond',
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
