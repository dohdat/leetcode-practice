/**
 * @param {number[]} nums
 * @return {number}
 */
var halveArray = function(nums) {
  const n = nums.length;
  const maxHeap = new MaxPriorityQueue({ priority: x => x });
  let startSum = 0;
  for (let num of nums) {
    maxHeap.enqueue(num);
    startSum += num;
  }
  let curSum = startSum;
  let res = 0;
  while (curSum > startSum / 2) {
    let cur = maxHeap.dequeue().element;
    let halfNum = cur / 2;
    res++;
    curSum -= halfNum;
    maxHeap.enqueue(halfNum);
  }
  return res;
};
