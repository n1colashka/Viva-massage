const gulp = require('gulp');

// Копирование картинок

module.exports = function script() {
    return gulp.src('app/images/*')
        .pipe(gulp.dest('dist/images/'));
};
