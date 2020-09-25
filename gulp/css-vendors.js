const gulp = require('gulp');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');


    module.exports = function styles() {
        return gulp.src([
            // Insert libs src here:
            'node_modules/normalize.css/normalize.css',
        ])
            .pipe(concat('libs.css'))
            .pipe(cleanCSS({
                compatibility: 'ie8'
            }))
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(gulp.dest('app/css'));
    };