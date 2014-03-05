'use strict';

require.config({
    baseUrl: '../..',
    name: 'bower_components/almond/almond',
    include: 'js/src/main',
    optimize: 'none',
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
