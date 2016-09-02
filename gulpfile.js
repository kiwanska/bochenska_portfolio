var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    // W DRUGIEJ OPCJI PRZEPISANE NA WYPLUWANIE OD RAZU NA FTP
    return gulp.src('./sass/**/*.scss')
            .pipe(sass({
                'outputStyle' : 'compact'
            }))
            .pipe(gulp.dest('./css'))
            .pipe(browserSync.stream());

    // return gulp.src('./sass/**/*.scss')
    //   .pipe(sass({
    //     'outputStyle' : 'compact'
    //     }))
    //   .pipe(gulpDeployFtp(options))
    //   .pipe(gulp.dest('./css'))
    //   .pipe(browserSync.stream());
});

// gulp.task('serve', ['sass'], function(){
//     browserSync.init({
//         proxy   : "index.html"
//     });

//     gulp.watch('./sass/**/*.scss', ['sass']);
//     gulp.watch('./**/*.php').on('change', browserSync.reload);
// });

gulp.task('default', ['serve']);
