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
                plugins.if(isProduction, combine(plugins.cleanCss(),plugins.rev())),
                gulp.dest('dist/styles'),
                plugins.if(isProduction, plugins.rev.manifest('css.json')),             
                gulp.dest('manifest'), 
                browserSync.stream()
        ).on('error',plugins.notify.onError(function (err) {
            return {
                title: 'Stylus',
                message: err.message
            }
        }));
    }
}


