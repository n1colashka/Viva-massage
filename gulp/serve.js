const gulp = require('gulp');

const imageMinify = require('./image-minify'),
    styles = require('./styles'),
    script = require('./scripts');
const imageWebp = require('./image-webp');
    html = require('./html');

const server = require('browser-sync').create();

// Запуск сервера а также слежка за файлами

module.exports = function serve(cb) {
    server.init({
        server: 'app',
        notify: false,
        open: true,
        cors: true
    });

    gulp.watch('app/pug/**/*.pug', gulp.series(html)).on('change', server.reload);
    gulp.watch('app/scss/**/*.scss', gulp.series(styles)).on('change', server.reload);
    gulp.watch('app/js/**/*.js', gulp.series(script)).on('change', server.reload);
    gulp.watch('app/images/*/*', gulp.series(imageMinify, imageWebp)).on('change', server.reload);

    return cb()
};
