module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['Gruntfile.js', 'static/js/src/**'],
        },
        requirejs: {
            compile: {
                options: {
                    mainConfigFile: 'js/src/main.js',
                    baseUrl: "static",
                    out: "js/build.js",
                    cssIn: "css/src/index.css",
                    cssOut: "css/build.css",
                    optimize: "uglify2"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['jshint', 'requirejs']);
};
