var bower = require('gulp-bower');
var browserify = require('browserify');
var concat = require('gulp-concat');
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var minifyCSS = require('gulp-minify-css');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');

var BUILD_DIR = '../app/static';

gulp.task('jshint', function() {
    gulp.src(['./gulpfile.js',
              './src/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('build-html', function() {
    return gulp.src([
        './index.html',
        './img/**/*',
        './bootstrap/**/*'
    ], {base: '.'})
        .pipe(gulp.dest(BUILD_DIR));
});

gulp.task('build-css', function() {
        gulp.src([
            './bootstrap/css/bootstrap.css', // TODO
            './bootstrap/css/bootstrap-responsive.css', // TODO
            './src/**/*.css'
        ])
        .pipe(minifyCSS({root: '.'}))
        .pipe(concat('build.css'))
        .pipe(gulp.dest(BUILD_DIR));
});

gulp.task('build-js', function() {
    browserify('./src/main.js')
        .bundle() // {debug: true}
        .pipe(source('build.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest(BUILD_DIR));
});

gulp.task('watch', ['default'], function() {
    gulp.watch('./src/**/*', ['default']);
});

gulp.task('default', [
    'jshint',
    'build-html',
    'build-css',
    'build-js'
]);
