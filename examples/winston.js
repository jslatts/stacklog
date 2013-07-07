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

module.exports = new StackLog(logger, {bd: '(', ed: ')'});