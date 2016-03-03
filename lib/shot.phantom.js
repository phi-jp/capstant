var page = require('webpage').create();
var system = require('system');
var args = system.args;

args.shift();
var options = JSON.parse(args[0]);

// console.log(options.url);
// console.log(options.output);

page.open(options.url, function (status) {
  page.viewportSize = options.viewportSize;
  page.clipRect = {
    top: 0,
    left: 0,
    width: options.viewportSize.width,
    height: options.viewportSize.height,
  };
  setTimeout(function() {
    page.render(options.output);
    phantom.exit();
  }, options.delay);
});