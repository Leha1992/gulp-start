module.exports = function (gulp) {
    return function () {
        gulp.watch('src/stylus/**/*.styl',gulp.series('styl')),
        gulp.watch('src/img/**/*.*',gulp.series('img')),
        gulp.watch('src/fonts/**/*.*',gulp.series('fonts')),
        gulp.watch('src/*.html',gulp.series('html'))
    }
}