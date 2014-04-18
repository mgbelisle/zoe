var bower = require('gulp-bower');
var browserify = require('browserify');
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');

gulp.task('jshint', function() {
    gulp.src(['./gulpfile.js',
              './static/main.js',
              './static/app/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('bower', function() {
    return bower('./static/bower_components');
});

gulp.task('browserify', ['bower'], function() {
    browserify('./static/main.js')
        .bundle({debug: true, insertGlobals: true}) // TODO: Remove insertGlobals
        .pipe(source('build.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest('./static'));
});

gulp.task('default', [
    'jshint',
    'browserify'
]);
