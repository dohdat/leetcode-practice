/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    if (wordDict === null || wordDict.length === 0) return false;
    let set = new Set(wordDict);
    let visited = new Set();
    let q = [0];
    while (q.length) {
        let start = q.shift();
        if (!visited.has(start)) {
            for (let end = start + 1; end <= s.length; end++) {
                if (set.has(s.slice(start, end))) {
                    if (end === s.length) return true;
                    q.push(end);
                }
            }
        }
        visited.add(start);
    }
    return false;
};
