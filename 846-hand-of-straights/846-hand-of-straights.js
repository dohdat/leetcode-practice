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
        let cur = key + i;
        if (!count.has(cur)) {
          return false;
        }
        count.set(cur, count.get(cur) - val);
        if (count.get(cur) < 0) {
          return false;
        }
      }
    }
  }
  return true;
};
