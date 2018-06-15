module.exports = function (gulp,plugins,browserSync,isProduction) {
    return function () {
       return gulp.src('src/index.html')
        .pipe(plugins.rigger())
        .pipe(plugins.if(isProduction, plugins.revReplace({
        	manifest: gulp.src('manifest/css.json')
        })))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream())
    }
}