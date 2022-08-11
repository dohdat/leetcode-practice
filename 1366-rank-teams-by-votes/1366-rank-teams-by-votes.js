/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function(votes) {
    let map = new Map();
    for (let v of votes) {
        for (let i = 0; i < v.length; i++) {
            let t = v[i];
            if (!map.has(t)) {
                map.set(t, new Array(v.length).fill(0));
            }
            map.get(t)[i]++;
        }
    }

    let arr = [];
    for (let [key, val] of map) {
        let cur = [key, val];
        arr.push(cur);
    }
    arr.sort((a, b) => {
        for (let i = 0; i < a[1].length; i++) {
            let listA = a[1][i];
            let listB = b[1][i];
            if (listA > listB) {
                return -1;
            } else if (listA < listB) {
                return 1;
            }
        }
        return a > b ? 1 : -1;
    });
    let res = arr.map((i) => i[0]).join('');
    return res;
};
