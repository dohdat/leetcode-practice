/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function(nums1, nums2) {
  const map2 = nums2.map((n, i) => [n, i]);
  const len = nums1.length;
  const res = [];
  const unused = [];

  nums1.sort((a, b) => a - b);
  map2.sort((a, b) => a[0] - b[0]);

  let cur = 0;
  for (let i = 0; i < len; i++) {
    const [num, idx] = map2[cur];
    if (num >= nums1[i]) {
      unused.push(nums1[i]);
    } else {
      res[idx] = nums1[i];
      cur++;
    }
  }
  for (let i = 0; i < len; i++) {
    if (res[i] === undefined) {
      res[i] = unused.pop();
    }
  }
  return res;
};
