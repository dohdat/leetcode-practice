/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let len = nums1.length + nums2.length;
    let mid = (len / 2 + 1) | 0;
    let i = 0,
        j = 0,
        k = 0,
        last,
        beforeLast;
    while (i < mid) {
        beforeLast = last;
        last = nums1[j] < (nums2[k] ?? Infinity) ? nums1[j++] : nums2[k++];
        i++;
    }
    return len % 2 === 0 ? (last + beforeLast) / 2 : last;
};
