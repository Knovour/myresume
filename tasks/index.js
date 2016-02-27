/* global __dirname */

'use strict'

const fs = require('fs');
const tasks = {};

module.exports = (gulp, plugins, config) => {
  fs
    .readdirSync(__dirname)
    .filter(file => ((file.indexOf('.') !== 0) && (file !== 'index.js')))
    .forEach(fileName => {
      const file = fileName.replace('.js', '');
      tasks[file] = require(`./${file}`)(gulp, plugins, config);
    });

  return tasks;
};
