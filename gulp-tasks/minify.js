var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

gulp.task('minify', function() {
  return gulp.src('www/*.html')
    .pipe(htmlmin({collapseWhitespace:true,minifyJS:true}))
    .pipe(gulp.dest('www/'));
});