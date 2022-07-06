/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function(rectangles) {
    let map = new Map();
    let res = 0;
    for (let i = 0; i < rectangles.length; i++) {
        let [w, h] = rectangles[i];
        let ratio = w / h;
        map.set(ratio, 1 + (map.get(ratio) || 0));
    }
    let sum = 0;
    for (let [key, count] of map) {
        count--;
        sum += (count * (count + 1)) / 2;
    }

    return sum;
};
