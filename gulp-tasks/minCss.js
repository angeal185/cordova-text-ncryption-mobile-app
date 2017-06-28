var gulp 	= require("gulp"),
minifyCSS 	= require("gulp-minify-css"), 			 		
notify 		= require("gulp-notify");

gulp.task("minCss", function () {
  return gulp.src(["www/css/*.css"])
	.pipe(minifyCSS())
    .pipe(gulp.dest("www/css/"))
	.pipe(notify("Task ConcatCss complete."));
});