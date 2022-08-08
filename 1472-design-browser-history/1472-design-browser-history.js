/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
  backStack = [homepage];
  forwardStack = [];
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
  forwardStack = [];
  backStack.push(url);
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
  while (steps && backStack.length > 1) {
    forwardStack.push(backStack.pop());
    steps--;
  }
  return backStack[backStack.length - 1];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
  while (steps && forwardStack.length) {
    backStack.push(forwardStack.pop());
    steps--;
  }
  return backStack[backStack.length - 1];
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
