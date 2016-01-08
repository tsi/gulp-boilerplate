var gulp = require('gulp');
var browserSync = require("browser-sync");

// Start the server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./www/"
    }
  });
});
