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

