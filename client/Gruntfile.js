module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['Gruntfile.js', 'src/js/**'],
        },
        requirejs: {
            compile: {
                options: {
                    mainConfigFile: './src/js/main.js',
                    appDir: './src',
                    baseUrl: './',
                    name: 'js/main',
                    dir: './build',
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
