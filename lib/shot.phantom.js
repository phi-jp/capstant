var page = require('webpage').create();
var system = require('system');
var args = system.args;

args.shift();
var options = JSON.parse(args[0]);

// console.log(options.url);
// console.log(options.output);

page.onAlert = function(msg) {
  console.log('ALERT: ' + msg);
};
page.onConfirm = function(msg) {
  console.log('CONFIRM: ' + msg);
  return true; // `true` === pressing the "OK" button, `false` === pressing the "Cancel" button
};
page.onPrompt = function(msg, defaultVal) {
  if (msg === "What's your name?") {
    return 'PhantomJS';
  }
  return defaultVal;
};

page.open(options.url, function (status) {
  page.viewportSize = options.viewportSize;
  page.clipRect = {
    top: 0,
    left: 0,
    width: options.viewportSize.width,
    height: options.viewportSize.height,
  };
  page.zoomFactor = options.zoom || 1;
  setTimeout(function() {
    page.render(options.output);
    phantom.exit();
  }, options.delay);
});