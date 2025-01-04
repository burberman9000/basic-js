const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    let firstCount = [];
    let counter = 0;
    for (let char of s1) {
        if (firstCount[char]) {
            firstCount[char]++;
        } else {
            firstCount[char] = 1;
        }
    }
    for (let char of s2) {
        if (firstCount[char] > 0) {
            counter++;
            firstCount[char]--;
        }
    }
    return counter;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}
getCommonCharacterCount('aabcc', 'adcaa');
module.exports = {
    getCommonCharacterCount,
};
