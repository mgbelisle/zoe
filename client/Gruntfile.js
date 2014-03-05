module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['Gruntfile.js', './src/js/**'],
        },
        requirejs: {
            compile: {
                options: {
                    mainConfigFile: './static/js/src/main.js'
                }
            }
        },
        closureCompiler: {
            options: {
                // compileFile might be different for other machines
                compilerFile: '/usr/share/java/closure-compiler/closure-compiler.jar',
                compilerOpts: {
                    compilation_level: 'ADVANCED_OPTIMIZATIONS',
                    externs: './static/bower_components/almond/almond.js',
                    language_in: 'ECMASCRIPT5',
                    warning_level: 'quiet'
                }
            },
            build: {
                src: './static/js/build.js',
                dest: './static/js/build.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-closure-tools');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['jshint', 'requirejs', 'closureCompiler']);
};
