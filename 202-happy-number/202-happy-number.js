/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let seen = new Set();
  function checkNum(num) {
    let total = 0;
    let arr = [];
    while (num > 0) {
      arr.push(num % 10);
      num = Math.floor(num / 10);
    }
    for (let i = 0; i < arr.length; i++) {
      total += Math.pow(arr[i], 2);
    }
    return total;
  }
  while (n !== 1) {
    if (seen.has(n)) {
      return false;
    }
    seen.add(n);
    n = checkNum(n);
  }
  return true;
};
