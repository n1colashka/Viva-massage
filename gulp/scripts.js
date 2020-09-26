const gulp = require('gulp');
const babel = require('gulp-babel');

// Работа со скриптами

module.exports = function script() {
    return gulp.src('app/js/*.js')
        .pipe(babel({
            presets: [
                '@babel/env',
            ]
        }))
        .pipe(gulp.dest('dist/js/'));
};
