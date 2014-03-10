require.config({
    baseUrl: '.',
    include: ['bower_components/almond/almond'],
    generateSourceMaps: true,
    name: 'main',
    optimize: 'uglify2',
    out: './build.js',
    paths: {
        angular: 'bower_components/angular/angular',
        text: 'bower_components/requirejs-text/text'
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
    'app/app'
], function(
    angular,
    _app
) {
    'use strict';

    angular.element(document).ready(function() {
        angular.bootstrap(document, ['zoe']);
    });
});
