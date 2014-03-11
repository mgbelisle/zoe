require.config({
    baseUrl: '.',
    include: ['bower_components/almond/almond'],
    generateSourceMaps: true,
    name: 'main',
    optimize: 'uglify2',
    out: './build.js',
    preserveLicenseComments: false,
    shim: {
        'bower_components/angular/angular': {
            exports: 'angular'
        }
    }
});

require([
    'bower_components/angular/angular',
    'app/app'
], function(
    angular,
    app
) {
    'use strict';

    angular.element(document).ready(function() {
        angular.bootstrap(document, ['zoe']);
    });
});
