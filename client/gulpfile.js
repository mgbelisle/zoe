var bower = require('gulp-bower');
var browserify = require('browserify');
var concat = require('gulp-concat');
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var minifyCSS = require('gulp-minify-css');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');

gulp.task('jshint', function() {
    gulp.src(['./gulpfile.js',
              './static/zoe/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// TODO: Make things use bower
gulp.task('bower', function() {
    return bower('./static/bower_components');
});

gulp.task('build-js', ['bower'], function() {
    browserify('./static/zoe/main.js')
        .bundle({debug: true})
        .pipe(source('build.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest('./static/'));
});

gulp.task('build-css', ['bower'], function() {
    gulp.src([
        // './static/bower_components/bootstrap/dist/css/bootstrap.css', // TODO
        './static/tmp/bootstrap/css/bootstrap.css', // TODO
        './static/tmp/bootstrap/css/bootstrap-responsive.css', // TODO
        './static/zoe/**/*.css'
    ])
        .pipe(minifyCSS())
        .pipe(concat('build.css'))
        .pipe(gulp.dest('./static/'));
});

gulp.task('watch', function() {
    gulp.watch(['./static/zoe/**/*'], ['default']);
});

gulp.task('default', [
    'jshint',
    'build-js',
    'build-css'
]);
