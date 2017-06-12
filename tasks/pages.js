import gulp from 'gulp'

gulp.task('views',()=>{
    return gulp.src('./src/views/**/*.html')
    .pipe(gulp.dest('./dist/views'))
});