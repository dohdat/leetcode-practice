/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    let rows = board.length;
    let cols = board[0].length;
    let res = new Set();
    let visited = new Array(rows).fill(false).map(() => new Array(cols).fill(false));

    function TrieNode() {
        this.children = new Map();
        this.end = false;
    }
    let root = new TrieNode();
    function add(word) {
        let cur = root;
        for (let c of word) {
            if (!cur.children.has(c)) {
                cur.children.set(c, new TrieNode());
            }
            cur = cur.children.get(c);
        }
        cur.end = true;
    }

    //add all the words to Trie
    for (let word of words) {
        add(word);
    }

    function dfs(r, c, node, word) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || visited[r][c] || !node.children.get(board[r][c])) {
            return;
        }
        visited[r][c] = true;
        word += board[r][c];
        node = node.children.get(board[r][c]);
        if (node.end) {
            res.add(word);
        }
        dfs(r - 1, c, node, word);
        dfs(r + 1, c, node, word);
        dfs(r, c - 1, node, word);
        dfs(r, c + 1, node, word);
        visited[r][c] = false;
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            dfs(r, c, root, '');
        }
    }
    return [...res];
};
