### Backtracking:
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

**Input:** nums = [1,2,3]

**Output:** [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

```javascript
var permute = function(nums) {
  let res = [];
  let cur = new Set();
  function backtrack() {
    if (cur.size === nums.length) {
      res.push([...cur]);
      return;
    }

    for (let n of nums) {
      if (cur.has(n)) {
        continue;
      }
      cur.add(n);
      dfs();
      cur.delete(n);
    }
  }
  backtrack();
  return res;
};
```
___

### Sliding Window:
Given a string s, find the length of the longest substring without repeating characters.

**Input:** s = "abcabcbb"
**Output:** 3
**Explanation:** The answer is "abc", with the length of 3.

```javascript
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let max = 0;
    let left = 0;
    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left++]);
        }
        set.add(s[right]);
        max = Math.max(max, right - left + 1);
    }
    return max;
};

```
___
### String methods:
**slice()** extracts a part of a string and returns the extracted part in a new string.

The method takes 2 parameters: start position, and end position (end not included).
```javascript
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);

return Banana
```
```javascript
let text = "Apple, Banana, Kiwi";
let part = text.slice(7);
return Banana, Kiwi
```

The ***indexOf()*** method returns the index of (position of) the first occurrence of a string in a string:
```javascript
let str = "Please locate where 'locate' occurs!";
str.indexOf("locate");

return 7
```
___
### Arrays methods:

The ***pop()*** method removes ***the last element*** from an array:
```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();

fruits = ["Banana", "Orange", "Apple"]
```
```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();

fruit = "Mango"
```
___
### Sets, Maps:
https://www.w3schools.com/js/js_sets.asp
___
### Stack:
___
### Two Pointers:
___
### BFS:
___
### DFS:
___
### Binary Search:
___
### Topological Sort:
___
### Union Find:
___
### Intervals:
___
### Fast & slow pointers:
___
### Heap:
___
### Greedy:
___
### Top-down DP:
___
### Bottom-up DP:
___
### Bit Manipulation:
___
### Trie:
___
### JavaScript Bitwise:
https://www.w3schools.com/js/js_bitwise.asp
___


