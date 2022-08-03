/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

//monotonic decreasing stack
var dailyTemperatures = function(temperatures) {
    let res = new Array(temperatures.length).fill(0);
    let stack = [];
    for (let i = 0; i < temperatures.length; i++) {
        let top = stack[stack.length - 1];
        while (stack.length && temperatures[top] < temperatures[i]) {
            let idx = stack.pop();
            res[idx] = i - idx;
            top = stack[stack.length - 1];
        }
        stack.push(i);
    }
    return res;
};
