module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['Gruntfile.js', 'static/js/**'],
        },
        requirejs: {
            compile: {
                options: {
                    mainConfigFile: 'js/main.js',
                    appDir: './static/',
                    baseUrl: './',
                    name: './static/js/main',
                    dir: './static/build',
                    // cssIn: "./static/css/src/main.css",
                    optimize: "uglify2"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['jshint', 'requirejs']);
};
