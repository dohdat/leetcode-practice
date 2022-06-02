/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let map = new Map();
  let freqArr = new Array(nums.length);
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1);
  }
  for (const [num, freq] of map.entries()) {
    freqArr[freq] = (freqArr[freq] || new Set()).add(num);
  }
  for (let i = freqArr.length - 1; i >= 0; i--) {
    if (freqArr[i]) res.push(...freqArr[i]);
    if (res.length === k) {
      break;
    }
  }
  return res;
};
