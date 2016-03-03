
var capstant = require('../lib/capstant');

capstant.shot('http://phiary.me', './hoge.png', {
  phantomPath: 'slimerjs',
  delay: 2000,
  viewportSize: {
    width: 640,
    height: 480,
  },
  size: {
    width: 320,
    height: 240,
  },
});