const gulp = require('gulp');
const babel = require('gulp-babel');
// const BABEL_POLYFILL = './node_modules/@babel/polyfill/browser.js';
// const merge = require('gulp-merge');
const concat = require('gulp-concat');
// const CLIENT_BABEL_OPTS = {
//     presets: ['env'],
//     plugins: ['transform-flow-strip-types'],
// };
// Работа со скриптами

module.exports = function script(cb) {
    
    // merge(gulp.src(BABEL_POLYFILL),
    //     gulp.src('app/js/*.js')
    //         .pipe(babel(CLIENT_BABEL_OPTS))
    //         .pipe(concat('main.js'))
    //         .pipe(gulp.dest('dist/js/'))
    // );

    gulp.src('app/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist/js/'))
    
    cb();
};
