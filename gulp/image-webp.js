const gulp = require('gulp'),
    webp = require('gulp-webp');

module.exports = function toWebp() {
    return gulp.src('app/images/**/*.jpg')
        .pipe(webp({
            quality: 70
        }))
        .pipe(gulp.dest('app/images/'));
}