module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['Gruntfile.js', './static/main.js', './static/app/**/*.js'],
        },
        requirejs: {
            compile: {
                options: {
                    mainConfigFile: './static/main.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['jshint', 'requirejs']);
};
