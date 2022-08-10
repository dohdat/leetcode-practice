/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    function gcd(a, b) {
        if (!b) {
            return a;
        }
        return gcd(b, a % b);
    }
    if (str1 + str2 === str2 + str1) {
        return str1.slice(0, gcd(str1.length, str2.length));
    } else {
        return '';
    }
};
