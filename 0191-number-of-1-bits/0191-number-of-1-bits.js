/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let count = 0;
  while (n !== 0) {
    let bitComp = n & 1; //1 &1 will return 1, 0 &1 will return 0
    if (bitComp === 1) count++;
    n >>>= 1;
  }
  return count;
};
