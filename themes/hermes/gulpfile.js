var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");

// One-time compilation Sass
gulp.task("sass", function () {
  return gulp
    .src("./source/scss/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(autoprefixer())
    .pipe(gulp.dest("./source/css"));
});

// Real-time compilation
gulp.task(
  "default",
  gulp.series("sass", function () {
    gulp.watch("./source/scss/_partial/*.scss", gulp.series("sass"));
    gulp.watch("./source/scss/*.scss", gulp.series("sass"));
  })
);
