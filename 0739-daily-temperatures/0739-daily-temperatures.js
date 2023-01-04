var dailyTemperatures = function(temperatures) {
  let stack = [];
  let n = temperatures.length;
  let res = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let curTemp = temperatures[i];
    while (
      stack.length > 0 && curTemp > temperatures[stack[stack.length - 1]]
    ) {
      let index = stack.pop();
      res[index] = i - index;
    }
    stack.push(i);
  }
  return res;
};
