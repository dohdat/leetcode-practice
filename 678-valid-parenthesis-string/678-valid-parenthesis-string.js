/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  let [low, high] = [0, 0];
  for (let c of s) {
    if (c === "(") {
      low += 1;
    } else {
      low += -1;
    }
    if (c !== ")") {
      high += 1;
    } else {
      high += -1;
    }
    if (high < 0) break;
    low = Math.max(low, 0);
  }
  return low === 0;
};
