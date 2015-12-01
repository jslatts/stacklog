var log = require('./winston')('FakeApp');

;(function run() {
  var l = log.debug('run', 'Ima debug statement!');
  l.debug('I am some more debug statement!');

  process.nextTick(function(){
    var l2 = l.push('nextTick');

    setTimeout(function(){
      var l3 = l2.debug('setTimeout', 'getting rather deep!');

      try {
        throw 'What does this button do?';
      }
      catch (err) {
        l3.error('Boom!', err);
      }
    },1000);

    l2.debug(null, 'Here is a object.', { id: 1, foo: 'bar' });
    l2.debug('Everything seems to be going well.');
  });
})();
