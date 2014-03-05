void function() {
    'use strict';

    require.config({
        // cssIn: '',
        appDir: '..',
        baseUrl: '.',
        dir: '../../build',
        include: 'bower_components/requirejs/require',
        generateSourceMaps: true,
        name: 'js/main',
        optimize: 'uglify2',
        paths: {
            'jquery': 'bower_components/jquery/dist/jquery'
        },
        preserveLicenseComments: false
    });
}();
