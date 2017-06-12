import gulp from 'gulp'
import babel from 'gulp-babel'

gulp.task('scripts',function(){
    console.log('编译js');
    return gulp.src('./src/scripts/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('./dist/scripts'))
})