#!/usr/bin/env node

'use strict';

// parse the command line arguments
var ArgumentParser = require('argparse').ArgumentParser;
var file = require('./file.js');
var xor = require('./xor.js');

var parser = new ArgumentParser({
  version: '0.0.1',
  addHelp:true,
  description: 'Repeating key XOR encrpytion at the console'
});
parser.addArgument(
  [ '-f', '--file' ],
  {
    required: true,
    help: 'the file to encrypt'
  }
);
parser.addArgument(
  [ '-k', '--key' ],
  {
    required: true,
    help: 'the repeating key to encrypt the file under'
  }
);
var args = parser.parseArgs();

file.readBytesFromFile(args.file, args.key);
