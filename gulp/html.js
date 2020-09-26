const gulp = require('gulp'),
    pug = require('gulp-pug'),
    prettify = require('gulp-html-prettify');

// Копирование HTML

module.exports = function buildHTML() {
    return gulp.src('app/pug/pages/*.pug')
        .pipe(pug())
        .pipe(prettify({indent_char: ' ', indent_size: 2}))
        .pipe(gulp.dest('app/'))
        .pipe(gulp.dest('dist/'))
};
