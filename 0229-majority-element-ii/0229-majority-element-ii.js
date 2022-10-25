/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  let map = new Map();
  let res = [];
  for (let n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }
  let len = nums.length;
  for (let [n, f] of map) {
    if (f > len / 3) {
      res.push(n);
    }
  }
  return res;
};
