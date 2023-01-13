const countTime = time => {
  let ans = 1; // Initialize the answer to 1 as there is at least one possible match for the given time string

  // Multiply the answer by 10 if the last digit of the minutes is a wildcard
  if (time[4] === "?") ans *= 10;

  // Multiply the answer by 6 if the second digit of the minutes is a wildcard
  if (time[3] === "?") ans *= 6;

  // If both digits of the hours is wildcard, multiply the answer by 24
  if (time[0] === "?" && time[1] === "?")
    ans *= 24;
  else if (time[1] === "?")
    // If only the second digit of the hours is wildcard, multiply the answer by 4 if the first digit is 2, otherwise by 10
    ans *= time[0] === "2" ? 4 : 10;
  else if (time[0] === "?")
    // If only the first digit of the hours is wildcard, multiply the answer by 2 or 3 depending on the second digit of the hours
    ans *= time[1] < "4" ? 3 : 2;

  // return the final answer
  return ans;
};
// Time Complexity: O(1) as we are iterating at most 5 times
// Space Complexity: O(1) as we are using only one variable 'ans'