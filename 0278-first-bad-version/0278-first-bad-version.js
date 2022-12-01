/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
  return function(n) {
    let left = 1;
    let right = n;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid)) {
        let found = mid;
        while (isBadVersion(found)) {
          found -= 1;
        }
        return found + 1;
      } else {
        left = mid + 1;
      }
    }
    return -1;
  };
};
