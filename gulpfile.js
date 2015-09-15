// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');

// JS hint task
gulp.task('jshint', function() {
  gulp.src('./public/javascript/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
  return gulp.src('./public/sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./public/css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('./public/sass/*.sass', ['sass']);
});

// // Default gulp task
gulp.task('default', ['sass', 'watch'], function() {
});
