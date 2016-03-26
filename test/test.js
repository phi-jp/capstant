
var capstant = require('../lib/capstant');

capstant.shot('http://google.com', './output/google.png').then(function(url) {
  console.log(arguments);
});

capstant.shot('http://phiary.me', './output/phiary1.png', {
  delay: 1200,
  width: 320,
  height: 240,
  viewportSize: {
    width: 640,
    height: 480,
  },
  zoom: 2,
}).then(function(url) {
  console.log(arguments);
});

capstant.shot('http://phiary.me', './output/phiary2.png', {
  phantomPath: 'slimerjs',
  delay: 1200,
  width: 320,
  height: 240,
  viewportSize: {
    width: 640,
    height: 480,
  },
}).then(function(url) {
  console.log(arguments);
});
