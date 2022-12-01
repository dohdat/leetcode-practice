var sortedSquares = function(nums) {
  let q = new MinPriorityQueue({ priority: x => x });
  let res = [];
  for (let n of nums) {
    q.enqueue(Math.pow(n, 2));
  }
  for (let i = 0; i < nums.length; i++) {
    let c = q.dequeue().element;
    res.push(c);
  }
  return res;
};