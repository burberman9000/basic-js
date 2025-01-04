const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(/* n */) {
    // const result = Array.from(String(n)).reduce((a, b) => Number(a + b));
    // console.log(result);
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}

// deleteDigit(152);
module.exports = {
    deleteDigit,
};
