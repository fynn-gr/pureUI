const { src, dest, watch, series } = require('gulp');
//const ts = require('gulp-typescript');
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
    return src('scss/index.scss')
        .pipe(sass())
        .pipe(dest('style'));
}

function watchTask() {
    watch(['scss/index.scss'], buildStyles);
    watch(['scss/_windowElements.scss'], buildStyles);
    watch(['scss/_layout.scss'], buildStyles);
    watch(['scss/_areaElements.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask)