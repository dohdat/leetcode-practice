### Backtracking:
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

**Input:** nums = [1,2,3]

**Output:** [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
<details>
  
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
  
</details>

___

### Sliding Window:
Given a string s, find the length of the longest substring without repeating characters.

**Input:** s = "abcabcbb"

**Output:** 3

**Explanation:** The answer is "abc", with the length of 3.
<details>
  
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
 </details>    
  
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
Iterative
Recursion
___
### DFS:
Iterative
Recursion
___
### Binary Search:
___
### Shortest Path:
  
Find the _shortest path_ from k to n
  
![image](https://user-images.githubusercontent.com/30649150/204414568-0f596aa8-a850-4463-9fb3-3ed3720709b7.png)
  
  
**Input:** times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
  
**Output:** 2

Dijkstra (weighted): O(E log V)
  
<details>
  
```javascript
  var networkDelayTime = function (times, n, k) {

    
    // Our return value, how long did it take
    // to reach all nodes within the network from {k}
    let time_taken = 0;

    // A set so we don't visit the same node twice.
    const visited_set = new Set();

    const min_heap = new MinPriorityQueue();

    // An adjacency list, where we store 
    // Node -> [[Edge, Cost],[Edge, Cost]]
    const node_edge_cost = new Map();

    // Build the adjacency list.
    for (const [node, edge, cost] of times) {
        let edges = [];
        if (node_edge_cost.has(node)) {
            edges = node_edge_cost.get(node);
        }
        edges.push([edge, cost]);
        node_edge_cost.set(node, edges);
    }

    // We have been asked to start at {k}
    // So we enqueue {k} at the cost of 0, as of course
    // it costs nothing as we start here.
    min_heap.enqueue([k, 0], 0);

    while (min_heap.size()) {

        // Get the cheapest operation relative to {k}
        // Node and cost
        const [node, cost] = min_heap.dequeue().element;

        // Have we already been here? No loops today kiddo
        if (visited_set.has(node)) continue;

        // Set it. We don't want to come back here. 
        visited_set.add(node);

        // Did our distance increase?
        // If so, update it. If not, keep the same
        time_taken = Math.max(cost, time_taken);

        // Get the edges for this node (If any)
        const node_edges = node_edge_cost.get(node) || [];

        for (const [edge_node, edge_cost] of node_edges) {
            if (!visited_set.has(edge_node)) {
                
                // Add it to the queue, set the priority to the cost of the edge
                // So we only ever visit the cheapest edge.
                min_heap.enqueue([edge_node, edge_cost + cost], edge_cost + cost);
            }
        }
    }

    // Did we visit every node?
    // If not, we failed to spread the message across the network.
    // If so, return the time taken. 
    return visited_set.size === n ? time_taken : -1;
};

```
  
</details>
  
#### Bellman Ford
Works when there is **negative weight edge**. Slower than Dijkstra.


<details>
  
```javascript
var networkDelayTime = function(times, n, k) {
  let arr = new Array(n + 1).fill(Infinity);
  arr[k] = 0;
  for (let i = 0; i <= n; i++) {
    let temp = arr.slice();
    for (let [source, target, cost] of times) {
      if (temp[source] === Infinity) continue;
      temp[target] = Math.min(temp[target], temp[source] + cost);
    }
    arr = temp;
  }
  arr.shift();
  let res = Math.max(...arr);
  return res === Infinity ? -1 : res;
};
```
Time Complexity: O ( V ⋅ E )

</details>

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
Find the Top/Least Kth element
___
### Greedy:
___
### Top-down DP:
___
### Bottom-up DP:
___

### Trie:
___
### Bit Manipulation:
___
### JavaScript Bitwise:
https://www.w3schools.com/js/js_bitwise.asp
___


