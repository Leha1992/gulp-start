module.exports = function (gulp,plugins,browserSync) {
    return function () {
       return gulp.src('src/index.html')
        .pipe(plugins.rigger())
        .pipe(plugins.cached('dist'))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream())
    }
}