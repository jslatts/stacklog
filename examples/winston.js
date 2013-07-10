'use strict';

var winston = require('winston')
, StackLog = require('../lib/stacklog')
;

var logger = new winston.Logger({
transports: [
  new (winston.transports.Console)({
    level: 'debug'
  , colorize: true
  })
, new (winston.transports.File)({
    level: 'error'
  , filename: 'app.log'
  })
]
}).setLevels({ 
  silly: 0
, verbose: 1
, debug: 2
, info: 3
, warn: 4
, error: 5
});

// Create a new stacklog instance with passed prefix and cached logger
module.exports = function (prefix) {
  return (new StackLog(logger, {bd: '(', ed: ')'}))(prefix);
};

