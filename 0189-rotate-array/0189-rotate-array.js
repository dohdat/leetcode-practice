var rotate = function(nums, k) {
  k %= nums.length;
  nums.unshift(...nums.splice(nums.length - k));
  return nums;
};
