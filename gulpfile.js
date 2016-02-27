/* global __dirname */

'use strict'

const gulp    = require('gulp');
const plugins = require('gulp-load-plugins')();
plugins.browserSync = require('browser-sync');

const config = require('./config');
const tasks = require('./tasks')(gulp, plugins, config);

gulp.task('build', [ 'postcss', 'webpack' ]);

gulp.task('default', [ 'server:start' ], () => {
  gulp.watch([ config.buildDir('src', 'css', true) ], [ 'postcss' ]);
  gulp.watch([ config.buildDir('src', 'js', true)  ], [ 'webpack' ]);

  gulp
    .watch(config.watch)
    .on('change', plugins.browserSync.stream);
});
