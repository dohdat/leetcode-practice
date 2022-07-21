/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s === '') return 0;
    let [set, dp] = [new Set(), new Map()];
    for (let i = 1; i <= 26; i++) {
        set.add(i.toString());
    }

    function decode(s) {
        if (s.length === 0) return 1;
        if (s.length === 1) return set.has(s) ? 1 : 0;
        if (dp.has(s)) {
            return dp.get(s);
        }
        let res = 0;
        if (set.has(s.substring(0, 1))) {
            res += decode(s.substring(1));
        }
        if (set.has(s.substring(0, 2))) {
            res += decode(s.substring(2));
        }
        dp.set(s, res);
        return res;
    }

    return decode(s);
};
