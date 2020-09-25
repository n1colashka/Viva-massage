const gulp = require('gulp'),
    pug = require('gulp-pug');

// Копирование HTML

module.exports = function buildHTML() {
    return gulp.src('app/pug/pages/*.pug')
        .pipe(pug({
            pretty: true,
        }))
        .pipe(gulp.dest('app/'))
        .pipe(gulp.dest('dist/'))
};
