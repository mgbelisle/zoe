module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['Gruntfile.js', 'static/**/*.js'],
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: "path/to/base",
                    mainConfigFile: "path/to/config.js",
                    name: "path/to/almond", // assumes a production build using almond
                    out: "path/to/optimized.js"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['jshint', 'requirejs']);
};
