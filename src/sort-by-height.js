const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function sortByHeight(arr) {
    const tempArr = arr.filter((value) => value != -1).sort((a, b) => a - b);

    let index = 0;
    const result = arr.map((item) => (item === -1 ? -1 : tempArr[index++]));
    return result;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}
sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);

module.exports = {
    sortByHeight,
};
