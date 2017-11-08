var
  gulp = require('gulp'),
	sass = require('gulp-sass');
	uglify = require('gulp-uglify');
  rename = require('gulp-rename');
  cleanCSS = require('gulp-clean-css');
  concat = require('gulp-concat');

// Gulp task for sass
gulp.task('sass', function () {
  gulp.src('assets/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({
           suffix: ".min",
           extname: ".css"
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));


});

gulp.task('icons', function() {
    return gulp.src('assets/libs/font-awesome/fonts/**.*')
        .pipe(gulp.dest('dist/fonts'));
});


gulp.task('fa', function () {
  gulp.src('assets/libs/font-awesome/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({
           suffix: ".min",
           extname: ".css"
    }))
    .pipe(gulp.dest('dist/css'));

});

// Uglify Plugins
gulp.task('uglifyPlugins', function() {
  return gulp.src(['assets/libs/bootstrap-sass/assets/javascripts/bootstrap.js', 'assets/scripts/main.js', 'assets/scripts/modernizr-custom.js', 'assets/scripts/mush.js'])
    .pipe(uglify())
    .pipe(concat('scripts.min.js'))
    .pipe(gulp.dest('dist/js'));
});



// Minify Plugins CSS
gulp.task('mincss', function() {
  return gulp.src(['dist/css/main.css', 'dist/css/font-awesome.css'])
    .pipe(rename({
           suffix: ".min",
           extname: ".css"
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('getjquery', function() {
  return gulp.src(['assets/scripts/jquery.min.js'])
    .pipe(rename({
           extname: ".js"
    }))
    .pipe(gulp.dest('dist/js'));
});

// Runs both tasks at once
gulp.task('build', ['uglifyPlugins', 'icons', 'fa', 'getjquery', 'sass']);

// Watching files
gulp.task('watch', function() {


  gulp.watch("assets/scripts/*.js", ['build']);
  gulp.watch("assets/styles/**/*.scss", ['sass']);


});

// Run these tasks as default
gulp.task('default', ['watch']);
