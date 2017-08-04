'use strict';
 
var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var runSequence = require('run-sequence');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var watch = require('gulp-watch');

gulp.task('less', function () {
  return gulp.src('./less/style.less')
    .pipe(less())
    .pipe(gulp.dest('./css'));
});
 
gulp.task('less:watch', function () {
  gulp.watch('./less/*.less', ['less']);
});

gulp.task('minify', function() {
  return gulp.src('./css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('css'));
});

gulp.task('clean', function () {
  return gulp.src('./css/*')
    .pipe(vinylPaths(del));
});

// Default task
gulp.task('default', function () {
  runSequence('clean', 'less', 'minify');
});
