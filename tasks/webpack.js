/* global __dirname */

'use strict'

const del = require('del');
const webpack = require('webpack-stream');

module.exports = (gulp, plugins, config) => {
  const webpackConfig = require(config.webpack);
  const browserSync = plugins.browserSync;

  const js  = config.buildDir('dest', 'js');

  gulp.task('clean-js', () => del([ js ], { force: true }));

  gulp.task('webpack', [ 'clean-js' ], () =>{
    return gulp
      .src(config.buildDir('src', 'js', true))
      .pipe(webpack(webpackConfig))
      .pipe(gulp.dest(config.buildDir('dest', 'js')))
      .pipe(browserSync.stream());
  });
};
