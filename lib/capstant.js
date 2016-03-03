var exec = require('child_process').exec;
var phantomScript = __dirname + '/shot.phantom.js';
var phantomPath = require('phantomjs-prebuilt').path;

module.exports = {
  shot: function(url, output, options) {
    this._shot(url, output, options);
  },

  _shot: function(url, output, options) {
    options = options || {};

    options.phantomPath = options.phantomPath || phantomPath;

    var args = {
      url: url,
      output: output,
      delay: options.delay || 0,
      viewportSize: options.viewportSize || {
        width: 640,
        height: 480,
      },
      size: options.size || {
        width: 640,
        height: 480,
      },
    };

    var command = [options.phantomPath, phantomScript, "'" + JSON.stringify(args) + "'"].join(' ');

    exec(command, function(err, stdout, stderr) {
      console.log(stdout);
    });
  },
};
