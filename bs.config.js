module.exports = {
  port: 4000,
  server: {
    baseDir: [ '.', 'assets' ],
    index: 'index.html'
  },
  files: [
    'index.html',
    'assets/css/*.css',
    'assets/js/*.js'
  ],
  reloadOnRestart: true,
}