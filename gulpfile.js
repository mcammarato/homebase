var gulp          = require('gulp'),
    less          = require('gulp-less'),
    concat        = require('gulp-concat'),
    autoPrefixer  = require('gulp-autoprefixer'),
    cleanCss      = require('gulp-clean-css'),
    sourceMaps    = require('gulp-sourcemaps'),
    gulpIf        = require('gulp-if'),
    util          = require('gulp-util'),
    watch         = require('gulp-watch');

var config = {
  prod: !!util.env.prod,
  dev: !util.env.prod
};

gulp.task('common-less', function(){
  gulp.src('client/assets/source/less/common/common.less')
    .pipe(less())
    .pipe(gulp.dest('client/assets/dist/css/common'))
});

gulp.task('components-less', function(){
  gulp.src('client/assets/source/less/components/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('client/assets/dist/css/components'))
});

gulp.task('clean-css', function(){
  gulp.src(['client/assets/dist/css/common/**/*.css', 'client/assets/dist/css/components/**/*.css'])
  .pipe(gulpIf(config.dev, sourceMaps.init()))
    .pipe(concat('styles.min.css'))
    .pipe(cleanCss({
      level: {
        2: {
          mergeAdjacentRules: true, // controls adjacent rules merging; defaults to true
          mergeIntoShorthands: true, // controls merging properties into shorthands; defaults to true
          mergeMedia: true, // controls `@media` merging; defaults to true
          mergeNonAdjacentRules: true, // controls non-adjacent rule merging; defaults to true
          mergeSemantically: false, // controls semantic merging; defaults to false
          overrideProperties: true, // controls property overriding based on understandability; defaults to true
          removeEmpty: true, // controls removing empty rules and nested blocks; defaults to `true`
          reduceNonAdjacentRules: true, // controls non-adjacent rule reducing; defaults to true
          removeDuplicateFontRules: true, // controls duplicate `@font-face` removing; defaults to true
          removeDuplicateMediaBlocks: true, // controls duplicate `@media` removing; defaults to true
          removeDuplicateRules: true, // controls duplicate rules removing; defaults to true
          removeUnusedAtRules: false, // controls unused at rule removing; defaults to false (available since 4.1.0)
          restructureRules: false, // controls rule restructuring; defaults to false
          skipProperties: [] // controls which properties won't be optimized, defaults to `[]` which means all will be optimized (since 4.1.0)
        }
      }
    }))
    .pipe(autoPrefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulpIf(config.dev, sourceMaps.write()))
    .pipe(gulp.dest('client/assets/dist'))
});

gulp.task('default', ['common-less', 'components-less', 'clean-css'], function(){
  gulp.watch('client/assets/source/less/common/*.less', ['common-less']);
  gulp.watch('client/assets/source/less/components/**/*.less', ['components-less']);
  gulp.watch('client/assets/dist/css/**/*.css', ['clean-css']);
});
