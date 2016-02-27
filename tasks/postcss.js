const del = require('del');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = (gulp, plugins, config) => {
  const browserSync = plugins.browserSync;
  const postcss = plugins.postcss;

  const css  = config.buildDir('dest', 'css');

  gulp.task('postcss', () => {
    del([ css ], { force: true });

    return gulp
      .src(config.buildDir('src', 'css', true))
      .pipe(postcss([
        autoprefixer({ browsers: [ 'last 1 versions' ]}),
        cssnano()
      ]))
      .pipe(gulp.dest(config.buildDir('dest', 'css')))
      .pipe(browserSync.stream());
  });
};
