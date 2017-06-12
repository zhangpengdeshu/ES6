import gulp from 'gulp'
import stylus from 'gulp-stylus'

gulp.task('styles',function(){
    console.log('编译stylus');
    return gulp.src('./src/styles/**/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./dist/styles'))
});