var gulp = require('gulp');
var watch = require('gulp-watch');

// Default task to be run with `gulp`
gulp.task('default', ['browser-sync','js','css'], function() {
  gulp.watch([paths.srcDir + '/scss/*.scss', paths.srcDir + '/scss/**/*.scss'], ['css']);
  gulp.watch([paths.srcDir + '/js/*.js', paths.srcDir + '/js/**/*.js'], ['js']);
});
