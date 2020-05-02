const _ = require('lodash');
const endingInfos = require('./lib/endings');
// const lettersToTonify = require('./lib/letters-to-tonify');
const toneMap = require('./lib/tone-map');
// const toneNumbers = [1, 2, 3, 4];

module.exports = { tonify };

const endingRegex = makeEndingRegex();

/**
 * @param {string} text
 * @param {object} options
 * @return {string}
 */
function tonify(text, options) {
  options = _.defaults(options, { allowSlashToneMarks: true })

  // if (options.allowSlashToneMarks) {
  //   phrase = convertSlashMarksToNumberMarks(phrase);
  // }

  const tonifiedText = text
    .replace(endingRegex, (...[, start, ending, toneMark, whitespace]) => {
      // const before = fullMatch.slice(0, 1);
      // const after = fullMatch.slice(slashMark.length + 1);

      // return before + slashToNumberMap[slashMark] + after;

      // if (!toneMark) {
      //   if (ending === 'v') {
      //     return 'ü';
      //   } 
      // }

      const toneDiacriticPosition = endingInfos[ending];

      if (ending === 'v') {
        ending = 'ü';
      } else if (ending === 'ue') {
        ending = 'üe';
      } 

      // console.log(toneDiacriticPosition, ending[toneDiacriticPosition])

      const diacritic = toneMap[
        ending[toneDiacriticPosition]
      ][
        toneMark
      ];

      const endingWithDiacritic =
        ending.slice(0, toneDiacriticPosition) +
        diacritic +
        ending.slice(toneDiacriticPosition + 1);

      const tonifiedSyllable = start + endingWithDiacritic + (whitespace || '');

      // console.log('---', fullMatch, ending, toneMark, endingWithDiacritic, 
      //   tonifiedSyllable, JSON.stringify(whitespace))

      return tonifiedSyllable;
    });

  return tonifiedText;
}

function makeEndingRegex() {
  const endings = Object.keys(endingInfos)
  const lowercaseEndings = endings.slice(0, endings.length / 2)
  const uppercasendings = endings.slice(endings.length / 2)
  const orderedEndings = [
    ...lowercaseEndings.sort((a, b) => b.length - a.length),
    ...uppercasendings.sort((a, b) => b.length - a.length),
  ];
  const syllableStartPattern = '([bcdfghjklmnpqrstwxyzBCDFGHJKLMNPQRSTWXYZ]?)';
  const syllableEndPattern = '(' + orderedEndings.join('|') + ')';
  const toneMarkPattern = '([1-4])'
  const whitespaceAfterSyllablePattern = '(\\s|\\.|,|\\?|!|:|;|$)?';
  const pattern =
    syllableStartPattern +
    syllableEndPattern +
    toneMarkPattern +
    whitespaceAfterSyllablePattern;

  // console.log(pattern);

  return new RegExp(pattern, 'g');
}

// /** (^|\s)?
//  * @param {string} word
//  * @return {string}
//  */
// function tonifyWord(word) {
//   if (/^[\s,.?!:;]+$/.test(word)) {
//     return word;
//   }

//   let tone = getTone(word);
//   let ending = getEnding(word);

//   if (!tone || !ending) {
//     return getTonelessFallback(word);
//   }

//   // TODO: Refactor this exception.
//   if (_.includes(['nue', 'lue'], stripToneNumber(word))) {
//     word = word.replace('u', 'ü');
//     ending = ending.replace('u', 'ü');
//   }

//   const tonifiedEnding = tonifyEnding(ending, tone);
//   const tonifiedWord = word.replace(ending, tonifiedEnding);

//   return stripToneNumber(tonifiedWord);
// }

// /**
//  * @param {string} word
//  * @return {string}
//  */
// function getTonelessFallback(word) {
//   const fallbackIoMap = {
//     lv: 'lü',
//     nv: 'nü',
//     lue: 'lüe',
//     nue: 'nüe'
//   };

//   return _.get(fallbackIoMap, word, word);
// }

// /**
//  * @param {string} letter
//  * @param {number} tone
//  * @return {string}
//  */
// function tonifyLetter(letter, tone) {
//   const keys = letter + '.' + tone;
//   return _.get(toneMap, keys, letter);
// }

// /**
//  * @param {string} ending
//  * @param {number} tone
//  * @return {string}
//  */
// function tonifyEnding(ending, tone) {
//   let letter;

//   _.forEach(lettersToTonify, function(letterAndPattern) {
//     if (!letter && ending.match(letterAndPattern.pattern)) {
//       letter = letterAndPattern.letter;
//     }
//   });

//   if (!letter) {
//     return ending;
//   }

//   return ending.replace(letter, tonifyLetter(letter, tone));
// }

// /**
//  * @param {string} word
//  * @return {string}
//  */
// function stripToneNumber(word) {
//   return _.trim(word, toneNumbers);
// }

// /**
//  * @param {string} phrase
//  * @return {array}
//  */
// function splitPhraseIntoWords(phrase) {
//   return phrase.split(/([\s,.?!:;]+)/g);
// }

// /**
//  * @param {string} word
//  * @return {number|null}
//  */
// function getTone(word) {
//   const lastCharacter = parseInt(_.last(word), 10);
//   return _.includes(toneNumbers, lastCharacter) ? lastCharacter : null;
// }

// /**
//  * @param {string} word
//  * @return {string|null}
//  */
// function getEnding(word) {
//   let ending = null;

//   _.forEach(endings, function(pattern, plainEnding) {
//     if (word.match(pattern)) {
//       ending = plainEnding;
//     }
//   });

//   return ending;
// }

// /**
//  * @param {string} phrase
//  * @return {string}
//  */
// function convertSlashMarksToNumberMarks(phrase) {
//   const slashToneMarksRegex = /[a-zA-Z](--|\\\/|\\|\/)(?:\s|\.|,|\?|!|:|;|$)?/g;

//   const slashToNumberMap = {
//     '--': 1,
//     '/': 2,
//     '\\/': 3,
//     '\\': 4
//   };

//   const phraseWithNumberToneMarks = phrase
//     .replace(slashToneMarksRegex, (...[fullMatch, slashMark]) => {
//       const before = fullMatch.slice(0, 1);
//       const after = fullMatch.slice(slashMark.length + 1);

//       return before + slashToNumberMap[slashMark] + after;
//     });

//   return phraseWithNumberToneMarks;
// }