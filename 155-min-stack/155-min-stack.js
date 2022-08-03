/**
 * @constructor
 */
var MinStack = function() {
  this.minStack = [];
  this.container = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(val) {
  this.container.push(val);
  if (
    this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]
  ) {
    this.minStack.push(val);
  }
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
  var x = this.container.pop();
  if (x === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop();
  }
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
  return this.container[this.container.length - 1];
};

MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1];
};
