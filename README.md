pinyinize.js
============

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]

A tool that converts Hanyu pinyin tone numbers to tone marks.

## Setup

```
$ npm install pinyinize --save
```

## Usage

```javascript
const { tonify } = require('pinyinize');

tonify('ma1 ma2 ma3 ma4 ma'); // returns 'mā má mǎ mà ma'

// a custom system of slash tone marks (arguably more intuitive and readable than numbers) is also allowed
tonify('ma-- ma/ ma\\/ ma\\, ma1 ma2 ma3 ma4 ma'); // returns 'mā má mǎ mà, mā má mǎ mà ma'

// to turn slash marks off
tonify('ma-- ma1', { allowSlashToneMarks: false }) // ma-- mā
```

## Tests

```
$ npm install -g mocha
$ npm test
```

## License

MIT © [Eric Nishio](http://ericnish.io)

[npm-url]: https://npmjs.org/package/pinyinize
[npm-image]: https://img.shields.io/npm/v/pinyinize.svg?style=flat-square

[travis-url]: https://travis-ci.org/ericnishio/pinyinize.js
[travis-image]: https://img.shields.io/travis/ericnishio/pinyinize.js.svg?style=flat-square
