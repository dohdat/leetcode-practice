/*
 * @lc app=leetcode id=859 lang=javascript
 *
 * [859] Buddy Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  const hashmap = {};
  let indexOfFirstWrong;
  let output = false;
  let hasDuplicate = false;
  let numberOfWrongCharacter = 0;

  for (let i = 0; i < goal.length; i++) {
    if (goal[i] !== s[i] && indexOfFirstWrong === undefined) {
      indexOfFirstWrong = i;
      numberOfWrongCharacter++;
    } else if (goal[i] !== s[i] && indexOfFirstWrong !== undefined) {
      output =
        goal[i] === s[indexOfFirstWrong] && goal[indexOfFirstWrong] === s[i];
      numberOfWrongCharacter++;
      if (numberOfWrongCharacter > 2) return false;
    }

    if (hashmap[s[i]]) hasDuplicate = true;

    hashmap[s[i]] = 1;
  }

  if (!numberOfWrongCharacter && hasDuplicate) return true;

  return output;
};
// @lc code=end
