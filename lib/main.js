'use strict';

var program = require('commander');
var path = require('path');

function main() {
  /* jshint maxstatements: 100 */

  var version = require('../package.json').version;
  var create = require('./create');

  program
    .version(version);

  program
    .command('create <directory>')
    .alias('init')
    .description('Initialize a new node')
    .option('-d, --datadir <dir>', 'Specify the bitcoin database directory')
    .action(function(dirname, name, cmd){
      if (cmd.datadir) {
        cmd.datadir = path.resolve(process.cwd(), cmd.datadir);
      }
      var opts = {
        cwd: process.cwd(),
        dirname: dirname,
        name: name,
        datadir: cmd.datadir || './data',
        isGlobal: false
      };
      create(opts, function(err) {
        if (err) {
          throw err;
        }
        console.log('Successfully created node in directory: ', dirname);
      });
    });

  program.parse(process.argv);

  if (process.argv.length === 2) {
    program.help();
  }

}

module.exports = main;
