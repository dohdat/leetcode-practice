/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let totalSum = 0;
  let partialSum = 0;
  let startingPoint = 0;
  for (let i = 0; i < gas.length; i++) {
    let surplus = gas[i] - cost[i];
    totalSum += surplus;
    partialSum += surplus;
    if (partialSum < 0) {
      partialSum = 0;
      startingPoint = i + 1;
    }
  }
  return totalSum >= 0 ? startingPoint : -1;
};
