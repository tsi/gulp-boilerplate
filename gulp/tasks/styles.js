var gulp = require('gulp');
var compass = require('gulp-compass');
var browserSync = require('browser-sync');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('css', function(done) {
  return gulp.src(paths.sassSrc + '/**/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      sass: paths.srcDir + '/scss',
      css: paths.destDir + '/css'
    }))
    .on('error', errorAlert)
    // .pipe(minifyCss({
    //   keepSpecialComments: 0
    // }))
    // .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(paths.destDir + '/css'))
    .pipe(browserSync.reload({stream:true}));
});
