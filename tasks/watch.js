module.exports = function (gulp) {
    return function () {
        gulp.watch('src/styles/**/*.styl',gulp.series('styl')),
        gulp.watch('src/styles/**/*.{png,jpg,svg}',gulp.series('img')),
        gulp.watch('src/fonts/**/*.*',gulp.series('fonts')),
        gulp.watch('src/*.html',gulp.series('html'))
    }
}