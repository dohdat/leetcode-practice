function twoSum(numbers, target) {
  function binarySearch(missing) {
    let left = 0;
    let right = numbers.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (missing === numbers[mid]) {
        return mid;
      }
      if (missing < numbers[mid]) {
        right = mid - 1;
      } else if (missing > numbers[mid]) {
        left = mid + 1;
      }
    }
    return -1;
  }
  for (let i = 0; i < numbers.length; i++) {
    let cur = numbers[i];
    let missing = target - cur;
    let index = binarySearch(missing);
    if (index !== -1) {
      if (index === i) {
        continue;
      }
      return [i + 1, index + 1].sort((a, b) => a - b);
    }
  }
  return [-1, -1];
}
