# Backtracking:
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

**Input:** nums = [1,2,3]

```javascript
var permute = function(nums) {
    var combinations = [],
        maxLength = nums.length;

    var backtrack = function(nums, path) {
        if (path.length === maxLength) {
            combinations.push([...path]);
        } else {
            for (var i = 0; i < nums.length; i++) {
                path.push(nums[i]);
                backtrack(nums.filter((itm, i) => i !== i), path);
                path.pop();
            }
        }
    }

    backtrack(nums, []);
    return combinations;
};
```

# Sliding Window:
Given a string s, find the length of the longest substring without repeating characters.

**Input:** s = "abcabcbb"
**Output:** 3
**Explanation:** The answer is "abc", with the length of 3.

```javascript
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let max = 0;
    let left = 0;
    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left++]);
        }
        set.add(s[right]);
        max = Math.max(max, right - left + 1);
    }
    return max;
};

```
