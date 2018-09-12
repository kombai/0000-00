var connect = require('gulp-connect');

const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');

gulp.task('webpack', () => {
  gulp.src('./app/app.js')
    .pipe(webpackStream({
      mode: "development",
      output: {
        filename: 'bundle.js',
      },
      module: {
        rules: [{
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          query: {
            presets: [
              ['latest', {
                modules: false
              }],
            ],
          },
        }, ],
      }
    }), webpack)
    .pipe(gulp.dest('./build'));
});

gulp.task('webserver', function() {
  connect.server();
});

gulp.task('default', ['webpack', 'webserver'], function() {
  gulp.watch('./app/*.js', ['webpack']);
  gulp.watch('./app/**/*.js', ['webpack']);
});