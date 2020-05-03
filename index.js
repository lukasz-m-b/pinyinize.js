const _ = require('lodash');
const endingInfos = require('./lib/endings');
// const lettersToTonify = require('./lib/letters-to-tonify');
const toneMap = require('./lib/tone-map');
// const toneNumbers = [1, 2, 3, 4];

module.exports = { tonify };

const initials = 'bcdfghjklmnpqrstwxyz'.split('');
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
    .replace(endingRegex, (...[fullMatch, start, ending, toneMark, whitespace]) => {
      // const before = fullMatch.slice(0, 1);
      // const after = fullMatch.slice(slashMark.length + 1);

      // return before + slashToNumberMap[slashMark] + after;

      // if (!toneMark) {
      //   if (ending === 'v') {
      //     return 'ü';
      //   } 
      // }

      const toneDiacriticPosition = endingInfos[ending];

      //if(!toneMark)
      console.log('---', start)

      // console.log('---', ending)

      if (start.length > 1 && !['sh', 'ch', 'zh'].includes(start)) {
        return fullMatch;
      }

      if (ending === 'v') {
        ending = 'ü';
      } else if (ending === 'ue' && start !== 'x') {
        ending = 'üe';
      }

      console.log(toneMark, ending, ending[toneDiacriticPosition], JSON.stringify(whitespace))

      const diacritic = toneMap[
        ending[toneDiacriticPosition]
      ][
        toneMark
      ];

      const endingWithDiacritic = toneMark
        ?
        ending.slice(0, toneDiacriticPosition) +
        diacritic +
        ending.slice(toneDiacriticPosition + 1)
        :
        ending;

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
  const syllableStartPattern = 
    '([' + 
    initials.join('') + 
    initials.map(i => i.toUpperCase()).join('') + 
    ']{0,2})';
  const syllableEndPattern = '(' + orderedEndings.join('|') + ')';
  const toneMarkPattern = '([1-4]|--|\\\/|\\|\/)?'
  const whitespaceAfterSyllablePattern = '(\\s|\\.|,|\\?|!|:|;|$)?';
  const pattern =
    syllableStartPattern +
    syllableEndPattern +
    toneMarkPattern +
    whitespaceAfterSyllablePattern;

  // console.log(pattern);

  return new RegExp(pattern, 'g');
}

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