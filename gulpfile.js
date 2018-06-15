const gulp              = require('gulp'),
      plugins           = require('gulp-load-plugins')(),
      del               = require('del'),
      path              = require('path'),
      nib               = require('nib'),
      resolver          = require('stylus').resolver,
      argv              = require('yargs').argv,
      combine           = require('stream-combiner2').obj,
      browserSync       = require('browser-sync').create();

const isProduction = argv.prod;

gulp.task('styl', require('./tasks/stylus')(gulp,plugins,isProduction,combine,browserSync,nib,resolver));
gulp.task('img', require('./tasks/img')(gulp,plugins,browserSync));
gulp.task('html', require('./tasks/html')(gulp,plugins,browserSync,isProduction));
gulp.task('fonts', require('./tasks/fonts')(gulp,plugins,browserSync));
gulp.task('watch', require('./tasks/watch')(gulp));
gulp.task('serve', require('./tasks/serve')(browserSync));
gulp.task('clean',() => del('dist'));

gulp.task('build',gulp.series('clean','html','fonts','img','styl'));
gulp.task('default',gulp.series('build', gulp.parallel('watch','serve')));
gulp.task('prod',gulp.series('build'));
