const gulp = require('gulp');
const babel = require('gulp-babel');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');
 

/*gulp.task('default12', ['watch']);
gulp.task('build', ['transpile-server','transpile-server-file']);
*/
gulp.task('transpile-server', () => {
    return gulp.src(['server/**/*.js','server.js'])
        .pipe(babel({
            presets: ['es2015']
        }))
        
});
