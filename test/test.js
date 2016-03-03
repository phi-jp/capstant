
var capstant = require('../lib/capstant');

capstant.shot('http://phiary.me', './output/phiary.png', {
  phantomPath: 'slimerjs',
  delay: 2000,
  width: 320,
  height: 240,
  viewportSize: {
    width: 640,
    height: 480,
  },
}).then(function(url) {
  console.log(arguments);
});

capstant.shot('http://google.com', './output/google.png', {
  phantomPath: 'slimerjs',
  viewportSize: {
    width: 640,
    height: 480,
  },
}).then(function(url) {
  console.log(arguments);
});
