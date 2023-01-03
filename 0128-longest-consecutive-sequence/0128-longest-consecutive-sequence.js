/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let visited = new Set();
  let longestSequence = 0;
  for (let num of nums) {
    if (visited.has(num)) continue;
    visited.add(num);

    let curSequence = 1;
    let curNum = num;
    while (visited.has(curNum - 1)) {
      curNum -= 1;
      curSequence += 1;
      visited.add(curNum);
    }
    curNum = num;
    while (visited.has(curNum + 1)) {
      curNum += 1;
      curSequence += 1;
      visited.add(curNum);
    }
    longestSequence = Math.max(longestSequence, curSequence);
  }
  return longestSequence;
};
