module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: [
                './Gruntfile.js',
                './static/main.js',
                './static/app/**/*.js'
            ]
        },
        requirejs: {
            compile: {
                options: {
                    mainConfigFile: './static/main.js'
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    './static/build.css': [
                        './static/bower_components/bootstrap/dist/css/bootstrap.css',
                        './static/app/**/*.css'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['jshint', 'requirejs', 'cssmin']);
};
