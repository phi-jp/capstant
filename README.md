# capstant
capture instant
node.js module

## Setup

On Mac OS X

```
$ brew install imagemagick
```


## Install

```
$ npm install capstant
```

## Usage

```js
var capstant = require('capstant');
```

## Examples

```js
capstant.shot('http://google.com', './output/google.png').then(function(url) {
  console.log('finish');
});

```

```js

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
  console.log('finish');
});
```

## License

MIT
