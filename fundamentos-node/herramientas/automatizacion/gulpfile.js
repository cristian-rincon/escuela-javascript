const server = require('gulp-server-livereload');

const { task, src } = require("gulp");

task("build", function (cb) {
  console.log("construyendo el sitio");
  setTimeout(cb, 3000);
});

/// Task actually don't works

task('webserver', function (cb) {
  src("www").pipe(
    server({
      livereload: true,
      directoryListing: true,
      port: 5000,
      open: true,
      defaultFile: "index.html",
    })
  );
});

