var gulp = require('gulp');
var sass = require('gulp-sass');
// Adding pug
var pug  = require('gulp-pug');

gulp.task('sass', function(){
	return gulp.src('views/sass/main.scss')
		.pipe(sass())
		.pipe(gulp.dest('public/css'))
});

gulp.task('views', function(){
	return gulp.src('views/pug/main.jade')
		.pipe(pug({
			doctype: 'html',
			pretty: true
		}))
		.pipe(gulp.dest('public/html'))
});

gulp.task('watch', function(){
	gulp.watch('./views/sass/*.scss', ['sass']);
	gulp.watch('./views/pug/*.jade', ['views']);
});
