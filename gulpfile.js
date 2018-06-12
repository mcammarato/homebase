var gulp  = require('gulp'),
    less  = require('gulp-less'),
    watch = require('gulp-watch');

gulp.task('less', function(){
  gulp.src('client/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('client/css'))
});

gulp.task('watch', function(){
  gulp.watch('client/less/*.less', ['less']);
});
