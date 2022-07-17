var Trie = function() {
  this.root = new Map();
};

Trie.prototype.insert = function(word) {
  let node = this.root;
  for (let ch of word) {
    if (!node.has(ch)) node.set(ch, new Map());
    node = node.get(ch);
  }

  node.isEnd = true;
};

Trie.prototype.search = function(word) {
  let node = this.root;
  for (let ch of word) {
    node = node.get(ch);
    if (!node) return false;
  }

  return node.isEnd || false;
};

Trie.prototype.startsWith = function(prefix) {
  let node = this.root;
  for (let ch of prefix) {
    node = node.get(ch);
    if (!node) return false;
  }

  return true;
};

/**
 * *Time: O(N), where N = length of key
 * *Space: O(N)
 */
