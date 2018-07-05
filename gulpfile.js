var gulp = require('gulp');
sass = require('gulp-sass');

gulp.task('sass', function(){
	return gulp.src('./views/sass/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./public/css')
});
