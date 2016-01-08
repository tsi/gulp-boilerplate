var requireDir = require('require-dir');
var notify = require("gulp-notify");


// Path Variables
global.paths = {
  srcDir: 'src',
  destDir: 'www'
};


// ToDo - this is global :(
global.errorAlert = function() {
  var args = Array.prototype.slice.call(arguments);
  // Send error to notification center with gulp-notify
  notify.onError({
    title: "Compile Error",
    message: "<%= error.message %>"
  });
  // Keep gulp from hanging on this task
  this.emit('end');
};

// Require all tasks in gulp/tasks, including subfolders
requireDir('./tasks', { recurse: true });
