/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//[ -4, -1, -1, 0, 1, 2 ]

var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let res = [];
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let curSum = nums[i] + nums[left] + nums[right];
            if (curSum === 0) {
                if (!set.has([nums[i], nums[left], nums[right]].toString())) {
                    set.add([nums[i], nums[left], nums[right]].toString());
                    res.push([nums[i], nums[left], nums[right]]);
                } else {
                    left++;
                    right--;
                }
            } else if (curSum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return res;
};
