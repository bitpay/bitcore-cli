'use strict';

var bitcore = require('bitcore-lib');

var scaffold = {};
scaffold.create = require('./lib/create');
scaffold.getDefaultConfig = require('./lib/create');
bitcore.scaffold = scaffold;

module.exports = scaffold;
