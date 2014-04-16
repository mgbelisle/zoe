var browserify = require('browserify');
var bower = require('gulp-bower');
var bump = require('gulp-bump');
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var q = require('q');
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
    var src = './static/main.js';
    var dest = './static/build.js';
    var bundleStream = browserify(src).bundle();

    bundleStream
        .pipe(source(src))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest(dest));
});

gulp.task('default', [
    'jshint',
    'browserify'
]);
