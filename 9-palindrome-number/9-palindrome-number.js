/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var digits = ('' + x).split('');
    let left = 0;
    let right = digits.length - 1;
    while (left <= right) {
        if (digits[left] !== digits[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};
