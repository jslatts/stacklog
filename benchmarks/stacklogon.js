var microtime = require('microtime')
, winston = require('winston')
, StackLog = require('../lib/stacklog')
;

var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({ level: 'debug' })
  ]
});

var log = (new StackLog(logger))('FakeApp');

var iterations = 1000;
var runs = 100;
var times = [];

for (var r=0; r<runs;r++) {
	var start = microtime.now();

	for (var i=0;i<iterations;i++) {
	  var f = i; // Do something dumb
	  log.debug(f);
	}

	var end = microtime.now();
	times.push(end-start);
}

var avg = times.reduce(function(t,s){return s+t;})/times.length;
console.log(avg + ' microseconds over ' + runs + ' runs of ' + iterations + ' iterations');
