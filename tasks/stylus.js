module.exports = function (gulp,plugins,isProduction,combine,browserSync,nib,resolver) {
    return function () {
        return  combine(
            gulp.src('src/styles/**/main.styl'),
                plugins.if(!isProduction,plugins.sourcemaps.init()),
                plugins.stylus({
                    define: {
                       url: resolver()
                    },
                    use:[
                    nib()
                ]}),
                plugins.autoprefixer({
                    browsers: ['last 6 versions'],
                    cascade: false
                }), 
                plugins.if(!isProduction,plugins.sourcemaps.write()),
                plugins.if(isProduction, combine(plugins.cleanCss(),plugins.rename('main.min.css'))),
                gulp.dest('dist/styles'),
                browserSync.stream()
        ).on('error',plugins.notify.onError(function (err) {
            return {
                title: 'Stylus',
                message: err.message
            }
        }));
    }
}


