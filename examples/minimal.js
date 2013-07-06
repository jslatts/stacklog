var winston = require('winston')
, StackLog = require('../lib/stacklog')
, log = (new StackLog(winston))('FakeApp')
;

;(function run() {
  var l = log.info('run', 'I want a pony!');

  process.nextTick(function(){
    l.error('No!');
  });
})();