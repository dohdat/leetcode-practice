/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let preMap = new Map();
    let res = [];
    for (let i = 0; i < words.length; i++) {
        preMap.set(words[i], 1 + (preMap.get(words[i]) || 0));
    }
    let sorted = [...preMap].sort((a, b) => {
        if (b[1] === a[1]) {
            return a[0].localeCompare(b[0]);
        }
        return b[1] - a[1];
    });

    for (let i = 0; i < k; i++) {
        res.push(sorted[i][0]);
    }
    return res;
};
