module.exports = function (gulp,plugins,browserSync) {
    return function () {
     return gulp.src('src/styles/**/*.{png,jpg,svg}', { since: gulp.lastRun('img')})
        .pipe(plugins.newer('dist'))
        .pipe(plugins.imagemin([
            plugins.imagemin.gifsicle({interlaced: true}),
            plugins.imagemin.jpegtran({progressive: true}),
            plugins.imagemin.optipng({optimizationLevel: 5}),
            plugins.imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulp.dest('dist/styles'))
        .pipe(browserSync.stream())
    }
}