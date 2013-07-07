var microtime = require('microtime');

var iterations = 1000;
var runs = 100;
var times = [];

for (var r=0; r<runs;r++) {
  var start = microtime.now();

  for (var i=0;i<iterations;i++) {
    var f = i; // Do something dumb
  }

  var end = microtime.now();
  times.push(end-start);
}

var avg = times.reduce(function(t,s){return s+t;})/times.length;
console.log(avg + ' microseconds over ' + runs + ' runs of ' + iterations + ' iterations');