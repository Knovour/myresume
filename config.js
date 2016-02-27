/* global process */
/* global __dirname */

'use strict'

const root = __dirname;

const config = {
  port: 4000,
  webpack: `${root}/webpack.config`,
  watch: [
    `${root}/index.html`,
    `${root}/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}`
  ],
  buildDir(target, type, returnWithFiles) {
    let path = (target === 'src') ? 'src' : 'assets';

    path = `${root}/${path}/${type}`;
    if(!returnWithFiles)
      return path;

    switch(type) {
      case 'js':   return `${path}/{,*/}*.jsx`;
      case 'css':  return `${path}/{,*/}*.css`;
      default:     return path;
    }
  }
};

module.exports = config;
