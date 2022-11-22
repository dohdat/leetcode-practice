/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

/**
Create a temp variable named carry
While (a&b) is not equal to 0
- let carry is a&b bitshifted to the left by 1
- a is equal to a xor b
- let b is equal to carry

Return a xor b 
Time: O(b)
Space: O(1)
**/


var getSum = function(a, b) {
  let carry;
  while ((a & b) !== 0) {
    carry = (a & b) << 1;
    a = a ^ b;
    b = carry;
  }
  return a ^ b;
};


