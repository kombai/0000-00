var webpack = require('gulp-webpack');
var concat = require('gulp-concat');
var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('webpack', function () {

    gulp.src('./app/app.js')
    .pipe(webpack({
        output: {
    		filename: 'bundle.js'
    	},
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            ]
        }
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('webserver', function() {
    connect.server();
});

gulp.task('default', ['webpack', 'webserver'], function () {
	gulp.watch('./app/*.js', ['webpack']);
	gulp.watch('./app/**/*.js', ['webpack']);
});
