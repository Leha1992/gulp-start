module.exports = function (gulp,plugins,browserSync) {
    return function () {
      return  gulp.src('fonts/**/*.*', { since: gulp.lastRun('fonts') })
            .pipe(plugins.newer('dist'))
            .pipe(gulp.dest('dist/fonts'))
            .pipe(browserSync.stream())
    }
}