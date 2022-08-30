/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
  let count = new Map();
  hand.sort((a, b) => a - b);
  for (let i of hand) {
    count.set(i, (count.get(i) || 0) + 1);
  }
  for (let [key, val] of count) {
    if (val > 0) {
      for (let i = 1; i < groupSize; i++) {
        if (!count.has(key + i)) {
          return false;
        }
        count.set(key + i, count.get(key + i) - val);
        if (count.get(key + i) < 0) {
          return false;
        }
      }
    }
  }
  return true;
};
