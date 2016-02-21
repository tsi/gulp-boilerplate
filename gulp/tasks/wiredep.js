var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var usemin = require('gulp-usemin');

gulp.task('wiredep', function () {
  gulp.src(paths.srcDir + '/index.html')
    .pipe(wiredep())
    .pipe(usemin())
    .pipe(gulp.dest(paths.destDir));
});
