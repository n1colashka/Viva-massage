const gulp = require('gulp');

const ttf2woff = require('gulp-ttf2woff'),
    ttf2woff2 = require('gulp-ttf2woff2');

// Конвертируем шрифты и копируем их из папки dev в dist

module.exports = function fonts() {

    gulp.src('app/fonts/**/*')
        .pipe(ttf2woff())
        .pipe(gulp.dest('app/fonts/'));
    gulp.src('app/fonts/**/*.*')
        .pipe(ttf2woff2())
        .pipe(gulp.dest('app/fonts/'))
    return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts/'));
};
