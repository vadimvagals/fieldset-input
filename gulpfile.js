var gulp = require('gulp'),
    webhelp = require('webhelp');

webhelp.sass(
    './src/sass/fieldset-input.scss',
    './src/sass/**/*.scss',
    'compile-sass',
    false,
    './dist'
);

webhelp.scripts(
    './src/js/**/*.js',
    'fieldset-input',
    'compile-js',
    '',
    './dist'
);

gulp.task('default', /*['compile-sass'],*/ function () {
    // gulp.start('compile-js');
    // gulp.start('compile-sass');

    webhelp.watch();
});