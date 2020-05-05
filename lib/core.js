import { endingInfos } from './endings'; 
import { toneMap } from './tone-map'; 

if (typeof window !== 'undefined') {
  window.pinyinizeJs = { tonify }
}

const initials = 'bcdfghjklmnpqrstwxyz'.split('');
const endingRegex = makeEndingRegex();
const slashToNumberMap = {
  '--': 1,
  '/': 2,
  '\\/': 3,
  '\\': 4
};

/**
 * @param {string} text
 * @return {string}
 */
export function tonify(text) {
  const tonifiedText = text
    .replace(endingRegex, (...[fullMatch, start, ending, toneMark, whitespace]) => {
      if (start.length > 1 && !['sh', 'ch', 'zh'].includes(start)) {
        return fullMatch;
      }

      if (ending === 'v') {
        ending = 'ü';
      } else if (ending === 'ue' && start !== 'x') {
        ending = 'üe';
      }

      const endingWithDiacritic = addDiacriticToEnding(ending, toneMark);
      const tonifiedSyllable = start + endingWithDiacritic + (whitespace || '');

      return tonifiedSyllable;
    });

  return tonifiedText;
}

function makeEndingRegex() {
  const endings = Object.keys(endingInfos);
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
  const toneMarkPattern = '([1-4]|--|\\\\/|\\\\|/)?'
  const whitespaceAfterSyllablePattern = '(\\s|\\.|,|\\?|!|:|;|$)?';
  const pattern =
    syllableStartPattern +
    syllableEndPattern +
    toneMarkPattern +
    whitespaceAfterSyllablePattern;

  return new RegExp(pattern, 'g');
}

function addDiacriticToEnding(ending, toneMark) {
  if (!toneMark) {
    return ending;
  }

  toneMark = slashToNumberMap[toneMark] || toneMark;
  
  const toneDiacriticPosition = endingInfos[ending];

  const diacritic = toneMap[
    ending[toneDiacriticPosition]
  ][
    toneMark
  ];

  const endingWithDiacritic = 
    ending.slice(0, toneDiacriticPosition) +
    diacritic +
    ending.slice(toneDiacriticPosition + 1);

  return endingWithDiacritic;
}
