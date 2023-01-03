/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  // Create an empty object to store visited elements
  let visited = {};

  let longestSequence = 0;
  // Iterate through the elements in the array
  for (let num of nums) {
    // Skip the element if it has already been visited
    if (visited[num]) {
      continue;
    }

    // Mark the element as visited
    visited[num] = true;

    // Find the length of the current consecutive sequence
    let currentSequence = 1;
    let currentNum = num;
    while (visited[currentNum - 1]) {
      currentNum -= 1;
      currentSequence += 1;
      visited[currentNum] = true;
    }
    currentNum = num;
    while (visited[currentNum + 1]) {
      currentNum += 1;
      currentSequence += 1;
      visited[currentNum] = true;
    }

    // Update the longest sequence if necessary
    if (currentSequence > longestSequence) {
      longestSequence = currentSequence;
    }
  }

  return longestSequence;
};
