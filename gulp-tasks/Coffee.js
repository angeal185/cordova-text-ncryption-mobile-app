var gulp = require("gulp");

// Task to compile coffeescript files
gulp.task("coffee", function() {
	gulp.src("www/coffee/*.coffee")
		.pipe(coffee({bare: true}))
		.pipe(gulp.dest("www/js"));
});