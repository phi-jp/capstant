var exec = require('child_process').exec;
var phantomScript = __dirname + '/shot.phantom.js';
var phantomPath = require('phantomjs-prebuilt').path;
var easyimage = require('easyimage');

module.exports = {
  queue: Promise.resolve(true),

  shot: function(url, output, options) {
    var self = this;
    this.queue = this.queue.then(function() {
      return new Promise(function(resolve) {
        self._shot(url, output, options, function() {
          resolve(url);
        });
      });
    });

    return this.queue;
  },

  _shot: function(url, output, options, callback) {
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
      zoom: options.zoom || 1,
    };

    var command = [options.phantomPath, phantomScript, "'" + JSON.stringify(args) + "'"].join(' ');

    exec(command, function(err, stdout, stderr) {
      if (options.width || options.height) {
        easyimage.resize({
          src: output,
          dst: output,
          width: options.width,
          height: options.height,
        }).then(function() {
          callback();
        });
      }
      else {
        callback();
      }
    });
  },
};
