/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let set = new Set();
  function digits(num) {
    var arr = [];
    let total = 0;
    while (num > 0) {
      arr.push(num % 10);
      num = Math.trunc(num / 10);
    }
    for (let i of arr) {
      total += Math.pow(i, 2);
    }
    return total;
  }
  while (n !== 1) {
    if (set.has(n)) {
      return false;
    }
    set.add(n);
    n = digits(n);
  }
  return true;
};
