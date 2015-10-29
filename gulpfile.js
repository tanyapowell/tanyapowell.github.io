var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');

gulp.task('sass', function() {
  return gulp.src('src/*.scss')
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(gulp.dest('../output/css/'));
});

gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('../output/'))
});

gulp.task('default', ['sass', 'html']);

gulp.task('sass:watch', function() {
  gulp.watch('./*.scss', ['scss']);
});
