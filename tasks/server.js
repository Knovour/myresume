'use strict'

module.exports = (gulp, plugins, config) => {
  gulp.task('server:start', [ 'postcss', 'webpack' ] , () => {
    plugins.browserSync.init({
      port: 4000,
      server: {
        baseDir: ".",
        index: "index.html"
      }
    });
  });
};
