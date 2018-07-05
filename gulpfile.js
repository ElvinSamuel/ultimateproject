var gulp = require('gulp');
sass = require('gulp-sass');

gulp.task('sass', function(){
	return gulp.src('views/sass/main.scss')
		.pipe(sass())
		.pipe(gulp.dest('public/css'))
});

gulp.task('watch', function(){
	gulp.watch('./views/sass/*.scss', ['sass']);
});
