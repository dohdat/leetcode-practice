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


### Stack:
Decode this string.
  
**Input:** s = "3[a]2[bc]"
  
**Output:** "aaabcbc"
 
<details>
  
```javascript
const decodeString = s => {
  const stack = [];
  for (const char of s) {
    if (char !== "]") { stack.push(char); continue; }
    let cur = stack.pop();
    let str = '';
    while (cur !== '[') {
      str = cur + str;
      cur = stack.pop();
    }
    let num = '';
    cur = stack.pop();
    while (!Number.isNaN(Number(cur))) {
      num = cur + num;
      cur = stack.pop();
    }
    stack.push(cur);
    stack.push(str.repeat(Number(num)));
  }
  return stack.join('');
};
```
  
</details>

___
### Two Pointers:
___
### BFS:
  
#### Iterative
  
#### Recursion
___
### DFS:
  
#### Iterative
  
#### Recursion
___
### Binary Search:
Find if target exists in array. You must write an algorithm with _**O(log n)**_ time complexity.
  
**Input:** nums = [-1,0,3,5,9,12], target = 9
  
**Output:** 4
  
**Explanation:** 9 exists in nums and its index is 4
  
<details>
  
```javascript
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

```
  
</details>
  
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
Return the correct order you should take to finish all courses. 
  
**Input:** numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
  
**Output:** [0,2,1,3]
  
**Explanation:** There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
  
<details>
  
```javascript
var findOrder = function(numCourses, prerequisites) {
  let preMap = new Map();
  //Create a set, not an array, so that we do not add visited nodes
  let res = new Set();
  let visited = new Set();
  //create adjList 
  for (let [crs, pre] of prerequisites) {
    preMap.set(crs, (preMap.get(crs) || []).concat(pre));
  }
    

  function dfs(node) {
    if (visited.has(node)) return false;
    visited.add(node);
    let visiting = preMap.get(node);
    while (visiting && visiting.length > 0) {
      let c = visiting.shift();
      if (!dfs(c)) return false;
    }
    visited.delete(node);
    res.add(node);
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return [];
  }
  return [...res];
};
```                             
</details>
  
___
### Union Find:
Find the _number of connected components_ in the graph.
  
![image](https://user-images.githubusercontent.com/30649150/204418053-33fb0980-461a-4923-a4cb-d619aa49542c.png)
  
**Input:** n = 5, edges = [[0,1],[1,2],[3,4]]
  
**Output:** 2
  
<details>
  
```javascript
var countComponents = function(n, edges) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }

  function find(n) {
    let p = arr[n];
    while (p !== arr[p]) {
      p = arr[p];
    }
    return p;
  }

  for (let [src, dst] of edges) {
    let p1 = find(src);
    let p2 = find(dst);
    if (p1 !== p2) {
      arr[p1] = arr[p2];
      n--;
    }
  }
  return n;
};
```
**Time Complexity:**  O(log n)
                        
</details>
  
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
### Cycle Detection in Graph:
___
### Sets, Maps:
#### Sets
Creates a new Set
```javascript
new Set()
const myArray = ["a","b","c"];
const letters = new Set(myArray);
```
Adds a new element to the Set
```javascript
letters.add("a");
```
Removes an element from a Set
```javascript
letters.delete("a");
```
Returns true if a value exists in the Set
```javascript
let res = letters.has("a");

res = true
```
Returns the number of elements in a Set
```javascript
const myArray = ["a","b","c"];
const letters = new Set(myArray);
let size = letters.size;

size = 3
```
#### Maps
Creates a new Map
```javascript
const fruits = new Map();
```
Sets the value for a key in a Map
```javascript
const preMap = new Map();

for (let [crs, pre] of prerequisites) {
    preMap.set(crs, (preMap.get(crs) || []).concat(pre));
}
```
Gets the value for a key in a Map
```javascript
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.get("apples");    // Returns 500
```
Removes a Map element specified by the key
```javascript
fruits.delete("apples");
```
Returns true if a key exists in a Map
```javascript
fruits.has("apples");
```
How to iterate through a hashmap
```javascript
for(let [key, val] of preMap) {
  console.log(key);
  console.log(val);
}
```
Returns the number of elements in a Map
```javascript
console.log(fruits.size);
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
The **push()** method adds a new element to an array **(at the end)**:
```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");

fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
```
The **shift()** method removes the first array element and "shifts" all other elements to a lower index.
```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();

fruits = ["Orange", "Apple", "Mango"];
```
The **unshift()** method adds a new element to an array **(at the beginning)**, and "unshifts" older elements:
```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
  
fruits = ["Lemon","Banana", "Orange", "Apple", "Mango"];
```
The **concat()** method creates a new array by merging (concatenating) existing arrays:
```javascript
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

myChildren = Cecilie,Lone,Emil,Tobias,Linus
```
The **splice()** method adds new items to an array.
```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

fruits = Banana, Orange, Lemon, Kiwi, Apple, Mango
  
//The first parameter (2) defines the position where new elements should be added (spliced in).

//The second parameter (0) defines how many elements should be removed.

//The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
```


The **slice()** method slices out a piece of an array.
```javascript
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
  
//This example slices out a part of an array starting from array element 1 ("Orange")
fruits = Orange, Lemon, Apple, Mango
```
___
### Bit Manipulation:
___
### JavaScript Bitwise:
https://www.w3schools.com/js/js_bitwise.asp
___


