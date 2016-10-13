/**
 * Created by joannamichalek on 30/08/16.
 */

var gulp = require('gulp');
var sass = require ('gulp-sass');

gulp.task ('style', function() {
    gulp.src( 'styles/**/*.scss')
        .pipe (sass().on ('error', sass.logError))
        .pipe ( gulp.dest ('./'))
});

//Watch task
gulp.task('default', function () {
    gulp.watch ('styles/**/*.scss', ['style']);

});