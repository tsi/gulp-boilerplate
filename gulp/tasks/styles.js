var gulp = require('gulp');
var compass = require('gulp-compass');

gulp.task('css', function() {
  return gulp.src(paths.srcDir + '/scss/**/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      sass: paths.srcDir + '/scss',
      css: paths.destDir + '/css',
      image: paths.destDir + '/images',
      font: paths.destDir + '/fonts',
      javascript: paths.destDir + '/js'
    }))
    .on('error', errorAlert)
    .pipe(gulp.dest(paths.destDir + '/css'));
});
