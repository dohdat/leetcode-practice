/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let preMap = new Map();
  for (let num of nums) {
    preMap.set(num, (preMap.get(num) || 0) + 1);
  }
  for (let [num, freq] of preMap) {
    if (freq > 1) {
      return true;
    }
  }
  return false;
};
