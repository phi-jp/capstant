var exec = require('child_process').exec;
var phantomScript = __dirname + '/shot.phantom.js';
var phantomPath = require('phantomjs-prebuilt').path;
var easyimage = require('easyimage');

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
      width: options.width || 320,
      height: options.height || 240,
      viewportSize: options.viewportSize || {
        width: 640,
        height: 480,
      },
    };

    var command = [options.phantomPath, phantomScript, "'" + JSON.stringify(args) + "'"].join(' ');

    exec(command, function(err, stdout, stderr) {
      easyimage.resize({
        src: args.output,
        dst: args.output,
        width: options.width,
        height: options.height,
      }, function(err, image) {
        console.log('finish resize');
      });
    });
  },
};
