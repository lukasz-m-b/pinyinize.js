"use strict";
exports.__esModule = true;
var endings_1 = require("./endings");
var tone_map_1 = require("./tone-map");
if (typeof window !== 'undefined') {
    window.pinyinizeJs = { tonify: tonify };
}
var initials = 'bcdfghjklmnpqrstwxyz'.split('');
var endingRegex = makeEndingRegex();
var slashToNumberMap = {
    '--': 1,
    '/': 2,
    '\\/': 3,
    '\\': 4
};
/**
 * @param {string} text
 * @return {string}
 */
function tonify(text) {
    var tonifiedText = text
        .replace(endingRegex, function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var fullMatch = _a[0], start = _a[1], ending = _a[2], toneMark = _a[3], whitespace = _a[4];
        if (start.length > 1 && !['sh', 'ch', 'zh'].includes(start)) {
            return fullMatch;
        }
        if (ending === 'v') {
            ending = 'ü';
        }
        else if (ending === 'ue' && start !== 'x') {
            ending = 'üe';
        }
        var endingWithDiacritic = addDiacriticToEnding(ending, toneMark);
        var tonifiedSyllable = start + endingWithDiacritic + (whitespace || '');
        return tonifiedSyllable;
    });
    return tonifiedText;
}
exports.tonify = tonify;
function makeEndingRegex() {
    var endings = Object.keys(endings_1.endingInfos);
    var lowercaseEndings = endings.slice(0, endings.length / 2);
    var uppercasendings = endings.slice(endings.length / 2);
    var orderedEndings = lowercaseEndings.sort(function (a, b) { return b.length - a.length; }).concat(uppercasendings.sort(function (a, b) { return b.length - a.length; }));
    var syllableStartPattern = '([' +
        initials.join('') +
        initials.map(function (i) { return i.toUpperCase(); }).join('') +
        ']{0,2})';
    var syllableEndPattern = '(' + orderedEndings.join('|') + ')';
    var toneMarkPattern = '([1-4]|--|\\\\/|\\\\|/)?';
    var whitespaceAfterSyllablePattern = '(\\s|\\.|,|\\?|!|:|;|$)?';
    var pattern = syllableStartPattern +
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
    var toneDiacriticPosition = endings_1.endingInfos[ending];
    var diacritic = tone_map_1.toneMap[ending[toneDiacriticPosition]][toneMark];
    var endingWithDiacritic = ending.slice(0, toneDiacriticPosition) +
        diacritic +
        ending.slice(toneDiacriticPosition + 1);
    return endingWithDiacritic;
}
