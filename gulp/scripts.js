const gulp = require('gulp');

// Работа со скриптами

module.exports = function script() {
    return gulp.src('app/js/*.js')
        .pipe(gulp.dest('dist/js/'));
};
