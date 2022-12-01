## Backtracking:
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
      backtrack();
      cur.delete(n);
    }
  }
  backtrack();
  return res;
};
```
  

___

## Sliding Window:
Given a string s, find the _length of the longest substring without repeating characters_.

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


## Stack:

**Question:**

Decode this string.
  
**Input:** s = "3[a]2[bc]"
  
**Output:** "aaabcbc"
 

  
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
___
**Question:**

Determine valid parentheses.

**Input:** s = "()[]{}"

**Output:** true

```javascript
var isValid = function(s) {   
    const stack = [];
    const map = {
      '(': ')',
      '[': ']',
      '{': '}'
    }
    
    for (let i = 0 ; i < s.length ; i++) {
        let c = s[i];
        if (map[c]) {
          stack.push(map[c])
        } else if (c !== stack.pop()) {
          return false;
        } 
    }
    
    return !stack.length;
};
```
  

___
## Two Pointers:
  
Return the _maximum amount of water a container can store_.
  
![image](https://user-images.githubusercontent.com/30649150/204601200-bcc4e2e8-6186-4d7f-b37e-489725210212.png)
  
**Input:** height = [1,8,6,2,5,4,8,3,7]
  
**Output:** 49
  
**Explanation:** The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
  
```javascript
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left <= right) {
    let curArea = Math.min(height[left], height[right]) * (right - left);
    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
    max = Math.max(max, curArea);
  }
  return max;
};
```
___
## BFS:
  
#### Iterative
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
  
![image](https://user-images.githubusercontent.com/30649150/204590605-7587d0a6-f9be-47e2-be27-42ad32de2f28.png)
  
**Input:** root = [3,9,20,null,null,15,7]
  
**Output:** [[3],[9,20],[15,7]]
  
  
```javascript
var levelOrder = function(root) {
    if(!root) return [];
    let q = [root];
    let res = [];
    while (q.length !== 0) {
        let temp = [];
        let len = q.length;
        for (let i = 0; i < len; i++) {
            let c = q.shift();
            temp.push(c.val);
            c.left && q.push(c.left);
            c.right && q.push(c.right);
        }
        res.push(temp);
    }
    return res;
};
```
                                
  
___
## DFS:
  
##### In-order: 
Left-> Root -> Right
##### Pre-order: 
Root-> Left -> Right
##### Post-order: 
Left-> Right -> Root
  
<img src="https://user-images.githubusercontent.com/30649150/204592320-ca049928-eadf-4862-a5c0-4652bb76d63c.png" width="300" height="300"/>

  
#### Recursion

**Question:**

Find the total sum of all root-to-leaf numbers. A **leaf** node is a node with no children. 
  
![image](https://user-images.githubusercontent.com/30649150/204594786-e9473ae0-b2c2-4c0b-8f64-d25ec1f56461.png)
  
**Input:** root = [1,2,3] 
  
**Output:** 25
  
**Explanation:** 
  
The root-to-leaf path 1->2 represents the number 12.
  
The root-to-leaf path 1->3 represents the number 13.
  
Therefore, sum = 12 + 13 = 25. 

```javascript
var sumNumbers = function(root) {
  let res = [];
  function dfs(node, path) {
    if (!node) {
      return false;
    }
    path.push(node.val);
    if (!node.left && !node.right) {
      res.push(Number(path.join("")));
      return true;
    }
    node.left && dfs(node.left, [...path]);
    node.right && dfs(node.right, [...path]);
  }
  dfs(root, []);
  let answer = res.reduce((a, b) => a + b);
  return answer;
};
```
___

**Question:**

Find the number of islands in a grid.

![image](https://user-images.githubusercontent.com/30649150/204641606-8eeb52bb-467d-418e-9f02-3be2f8e4e17d.png)

**Output:** 3

```javascript
var numIslands = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let res = 0;
    function dfs(r, c) {
        if (r < 0 || c < 0 || r >= rows || c >= cols || !grid[r][c] || grid[r][c] === '0') {
            return;
        }
        grid[r][c] = '0';
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    }
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                res++;
                dfs(r, c);
            }
        }
    }
    return res;
};
```
___
## Binary Search:
Find if target exists in array. You must write an algorithm with _**O(log n)**_ time complexity.
  
**Input:** nums = [-1,0,3,5,9,12], target = 9
  
**Output:** 4
  
**Explanation:** 9 exists in nums and its index is 4
  
  
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
  

___ 
## Graphs:

#### Vertex vs Edge
![image](https://user-images.githubusercontent.com/30649150/204603322-a7cc9c31-f8e6-4567-8a23-b07e4d121102.png)

#### Shortest Path:
  
Find the _shortest path_ from k to n
  
![image](https://user-images.githubusercontent.com/30649150/204414568-0f596aa8-a850-4463-9fb3-3ed3720709b7.png)
  
  
**Input:** times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
  
**Output:** 2

#### Dijkstra (weighted)
  
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

**Time Complexity:** O(E log V)
  
</details>
  
#### Bellman Ford
Works when there is **negative weight edge**. Slower than Dijkstra.


  
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
**Time Complexity:** O ( V ⋅ E )

___
  
#### All paths from Source to Target:
  
Find all possible paths from source to target. Return them in **any order**.
  
![image](https://user-images.githubusercontent.com/30649150/204597998-57d77c73-94a9-431d-a805-ecbed876be12.png)
  
**Input:** graph = [[1,2],[3],[3],[]]
  
**Output:** [[0,1,3],[0,2,3]]
  
**Explanation:** There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.


```javascript
var allPathsSourceTarget = function(graph) {
  let res = [];
  let target = graph.length - 1;
  function dfs(node, path) {
    path.push(node);
    if (node === target) {
      res.push(path);
      return;
    }

    let visiting = graph[node];
    for(let cur of visiting) {
      dfs(cur, [...path])
    }
  }

  dfs(0, []);
  return res;
};
```
  
___
#### Min Cost to Connect all Points (Minimum Spanning Tree):
Return the _minimum cost to make all points connected_. All points are connected if there is exactly one simple path between any two points.
                        
![image](https://user-images.githubusercontent.com/30649150/204612578-a5daf822-86a5-41f4-9366-31fe31f68190.png)
                      
**Input:** points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
                        
**Output:** 20
                        
**Explanation: **
                        
![image](https://user-images.githubusercontent.com/30649150/204612554-aa521193-a231-4c69-ac61-922babf0566c.png)

We can connect the points as shown above to get the minimum cost of 20.
Notice that there is a unique path between every pair of points.
                        
```javascript
var minCostConnectPoints = function(points) {
  let cost = 0;
  let n = points.length;
  let dist = new Array(n).fill(Infinity);
  dist[0] = 0;
  let next = 0;
  for (let i = 1; i < n; i++) {
    let min = Infinity;
    let point = -1;
    for (let j = 1; j < n; j++) {
      let [x1, y1] = points[j];
      let [x2, y2] = points[next];
      if (dist[j] > 0) {
        dist[j] = Math.min(dist[j], Math.abs(x1 - x2) + Math.abs(y1 - y2));
        if (dist[j] < min) {
          min = dist[j];
          point = j;
        }
      }
    }
    cost += min;
    dist[point] = 0;
    next = point;
  }
  return cost;
};
```
___
#### Topological Sort (Cycle Detection):
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
                                 
**Time Complexity:** O(V+E), where V = vertices, E = Edges.
                                 
</details>
  
___

#### Union Find (Disjoint Set):
A Union-Find data structure is to maintain a set of elements partitioned into a number of mutually disjoint (non-overlapping) subsets. So _no elements belong to more than one set_. 

**Applications:**

- connected component in Graph problem.
  
- detecting cycles in graph.
  
- minimum spanning tree.


**Question:**
  
Find the _number of connected components_ in the graph.
  
![image](https://user-images.githubusercontent.com/30649150/204418053-33fb0980-461a-4923-a4cb-d619aa49542c.png)
  
**Input:** n = 5, edges = [[0,1],[1,2],[3,4]]
  
**Output:** 2
  
  
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
                       
___
## Intervals:

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return _an array of the non-overlapping intervals that cover all the intervals in the input._
                        
**Input:** intervals = [[1,3],[2,6],[8,10],[15,18]]
                        
**Output:** [[1,6],[8,10],[15,18]]
                        
**Explanation:** Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
                        
![image](https://user-images.githubusercontent.com/30649150/204608601-3b48125d-d15c-427c-88f0-5d8181a8cf89.png)


```javascript
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let prev = intervals[0];
    let res = [prev];
    for (let i = 0; i < intervals.length; i++) {
        let c = intervals[i];
        if (c[0] <= prev[1]) {
            prev[1] = Math.max(prev[1], c[1]);
        } else {
            res.push(c);
            prev = c;
        }
    }
    return res;
};                 
```

                        
___
## Fast & slow pointers:
Return true _if there is a cycle in the linked list_. Otherwise, return false.
  
![image](https://user-images.githubusercontent.com/30649150/204609982-70538f59-4138-4d8f-b2d9-798f59ec8e84.png)
  
**Input:** head = [3,2,0,-4], pos = 1
  
**Output:** true
  
**Explanation:** There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

  
```javascript
var hasCycle = function(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};
```
  

___
## Heap:
  
Given an integer array nums and an integer k, return the k _most frequent elements_. You may return the answer in **any order**.

**Input:** nums = [1,1,1,2,2,3], k = 2
  
**Output:** [1,2]

```javascript
var topKFrequent = function(nums, k) {
  let map = new Map();
  let maxHeap = new MaxPriorityQueue(item => item.value);

  // O(n) Time complexity
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let ans = [];
  // We are building a maxHeap for the D unique item
  // O(D) time complexity
  for (let [key, value] of map) {
    maxHeap.enqueue(key, value);
  }

  for (let i = 0; i < k; i++) {
    // We are dequeuing the k elements which can take upto O(klogD)
    let _item = maxHeap.dequeue();
    ans.push(_item.element);
  }

  return ans;
};
```
___
## Greedy:
                        
Greedy is an algo approach that builds up a solution piece by piece, always choosing the next piece that **offers that most obvious and immediate benefit**. So the problems where choosing locally optimal also leads to global solution are the best fit for Greedy. 

**Question:**
                        
Given an integer array nums, find the subarray which has the largest sum and return its sum.

**Input:** nums = [-2,1,-3,4,-1,2,1,-5,4]
                        
**Output:** 6
                        
**Explanation:** [4,-1,2,1] has the largest sum = 6.  
```javascript
var maxSubArray = function(nums) {
  let res = nums[0];
  let curMax = 0;
  for (let n of nums) {
    if (curMax < 0) {
      curMax = 0;
    }
    curMax += n;
    res = Math.max(res, curMax);
  }
  return res;
};
```
                        
___
## Top-down DP:
  
Given an integer array nums, return the **length of the longest strictly increasing subsequence**.

**Input:** nums = [10,9,2,5,3,7,101,18]
  
**Output:** 4
  
**Explanation:** The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
  
```javascript
var lengthOfLIS = function(nums) {
    const dp = new Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
};
```
___
## Bottom-up DP:
  
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
  
**Input:** n = 3
  
**Output:** 3
  
**Explanation:** There are three ways to climb to the top.
  
1. 1 step + 1 step + 1 step
  
2. 1 step + 2 steps
  
3. 2 steps + 1 step

```javascript
var climbStairs = function(n) {
  let memo = [];
  function dfs(step, end) {
    if (step === end) {
      return 1;
    }
    if (end < step) {
      return 0;
    }
    if (memo[step]) {
      return memo[step];
    }
    memo[step] = dfs(step + 1, end) + dfs(step + 2, end);
    return memo[step];
  }
  return dfs(0, n);
};
```
___

## Trie:

Given an m x n board of characters and a list of strings words, return **all words on the board**.
                   
![image](https://user-images.githubusercontent.com/30649150/204600726-f686a3f4-c7ac-4800-a266-a059e2c2cdb3.png)
                   
**Input:** board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
                   
**Output:** ["eat","oath"]

                   
<details>
  
```javascript
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
```
  
</details>
  
___
## Sets, Maps:
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
## Arrays methods:
Find Intersection of Two Arrays
  
**Input:** nums1 = [4,9,5], nums2 = [9,4,9,8,4]
  
**Output:** [9,4]
  
**Explanation:** [4,9] is also accepted.
```javascript
const set_intersection = (set1, set2) => {
    let output = [];
    const arr = Array.from(set1)
    for (let s of arr)
      if (set2.has(s)) {
          output.push(s);
      }

    return output;
  }
var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    if (set1.size < set2.size) {
        return set_intersection(set1, set2);
    }
    else {
        return set_intersection(set2, set1);
    }
};
```

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
## String methods:
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
                              
Break string into Array
```javascript
let text = "How are you doing today?";
const myArray = text.split(" ");

Output: ["How","are","you","doing","today?"]
```
                              
Remove the first and last char of a string
```javascript
let str = "Hello";
let newStr = str.slice(1,-1);
                              
console.log(newStr);
Output: "ell"
```
___
## Bit Manipulation:
Write a function that takes an unsigned integer and returns the number of '1' bits it has.

**Input:** n = 00000000000000000000000000001011
  
**Output:** 3
  
**Explanation:** The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
  
```javascript
var hammingWeight = function(n) {
  let count = 0;
  while (n !== 0) {
    let bitComp = n & 1; //1 &1 will return 1, 0 &1 will return 0
    if (bitComp === 1) count++;
    n >>>= 1; // unsigned right shift assignment (chop off the last bit and assign it)
  }
  return count;
};
```
___
## JavaScript Bitwise:
  
![image](https://user-images.githubusercontent.com/30649150/204605771-61e3bace-1fb5-47d8-b6b9-5ae132948399.png)
  
![image](https://user-images.githubusercontent.com/30649150/204605814-fb389423-021e-4925-a78c-44fff6c8336d.png)


___


