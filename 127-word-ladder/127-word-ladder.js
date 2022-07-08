/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    /**
        Concept:
        -- The problem can be thought of as looking for neighbors of a word, wherein each neighbor
           differs by one character at each position of the word. This is similar to BFS.
        
        Approach:
        1. Push the beginWord to a queue
        2. For each element removed from queue, check if it's equivalent to endWord and exit if true
        3. If not, try replacing each character of the word with one of the possible characters derived
           from all words
           -- Push all unseen valid characters onto queue for consideration at next level
           -- Increment number of transitions
           
        Steps 2 and 3 can be very exhaustive and repetitive for invalid words.
        As on optimization, we can create a map of word roots for each word with 1 substitution and
        group all words that can lead up to that state. For example, the 3 states for word 'hot' are:
        ['*ot', 'h*t', 'ho*'] and valid words that map to those combinations are:
        '*ot' -> [hot, dot, lot]
        'h*t' -> [hot]
        'ho*' -> [hot]
    */
    let map = new Map();
    // '*ot' -> [hot, dot, lot]
    for (let el = 0; el < wordList.length; el++) {
        let word = wordList[el];
        for (let i = 0; i < word.length; i++) {
            let wordRoot = word.substring(0, i) + '*' + word.substring(i + 1);
            if (map.has(wordRoot)) {
                map.get(wordRoot).push(word);
            } else {
                map.set(wordRoot, [word]);
            }
        }
    }

    let q = [beginWord];
    let res = 0;
    let visited = new Set();
    while (q.length > 0) {
        const neighbors = [];
        let len = q.length;
        for (let i = 0; i < len; i++) {
            let w = q.shift();
            if (w === endWord) {
                return res + 1;
            }
            //consider all roots possible from this word
            for (let j = 0; j < w.length; j++) {
                let wordRoot = w.substring(0, j) + '*' + w.substring(j + 1);
                //consider all words that have the same root
                for (let nei of map.get(wordRoot) || []) {
                    //if this word has been visited before, continue, else consider it
                    if (!visited.has(nei)) {
                        visited.add(nei);
                        neighbors.push(nei);
                    }
                }
            }
        }
        q = neighbors;
        res++;
    }
    return 0;
    // Time Complexity: O(WordLength^2 * numWords)
    // => WordLength * (substring ops = O(WordLength)) * numWords
    // Space Complexity: O(WordLength^2 * numWords)
    // => WordLength * (substring ops = O(WordLength)) * numWords
};
