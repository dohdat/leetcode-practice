/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  let left = 0;
  let right = Math.max(...piles);
  function canEat(speed) {
    let time = 0;
    for (let p of piles) {
      time += Math.ceil(p / speed);
    }
    return time <= h;
  }
  while (left < right) {
    let mid = Math.floor((right + left) / 2);
    if (!canEat(mid)) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};
