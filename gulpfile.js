var gulp  = require('gulp'),
    less  = require('gulp-less'),
    watch = require('gulp-watch');

gulp.task('less', function(){
  gulp.src('client/assets/source/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('client/assets/dist/css/'))
});

gulp.task('default', ['less'], function(){
  gulp.watch('client/assets/source/less/*.less', ['less']);
});
