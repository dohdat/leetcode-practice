// Time complexity: O(n)
// Space complexity: O(n)
var dailyTemperatures = function(temperatures) {
  // stack to store indices of temperatures
  let stack = [];
  let n = temperatures.length;
  // result array to store distance between each temperature and the next larger temperature
  let res = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    // current temperature
    let curTemp = temperatures[i];
    // while there is a next larger temperature
    while (
      stack.length > 0 && curTemp > temperatures[stack[stack.length - 1]]
    ) {
      // pop top temperature from stack
      let index = stack.pop();
      // update result array with distance between current temperature and next larger temperature
      res[index] = i - index;
    }
    // push current temperature and its index onto stack
    stack.push(i);
  }
  return res;
};
