const countTime = time => {
  let ans = 1;
  if (time[4] === "?") ans = ans * 10;
  if (time[3] === "?") ans = ans * 6;
  if (time[0] === "?" && time[1] === "?")
    ans = ans * 24;
  else {
    if (time[1] === "?") ans = ans * (time[0] === "2" ? 4 : 10);
    if (time[0] === "?") ans = ans * (time[1] < "4" ? 3 : 2);
  }
  return ans;
};
