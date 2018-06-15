module.exports = function (browserSync) {
    return function () {
        browserSync.init({
            server: {
                baseDir: "./dist",
                index: "index.html"
            },
            port: 8080,
            open: true,
            notify: false
        });
        browserSync.watch('dist/**/*.*').on('change', browserSync.reload);
    }
}