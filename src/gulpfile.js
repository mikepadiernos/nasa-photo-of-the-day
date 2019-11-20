const gulp = require('gulp');
const stylus = require('gulp-stylus');

gulp.task('theme', () => {
	return gulp.src('./stylus/app.styl')
		.pipe(stylus())
		.pipe(gulp.dest('./css'));
});

gulp.task('default', () => {
	gulp.watch('**/*.styl', gulp.series('theme'));
});