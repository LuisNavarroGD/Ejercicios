var RandomizedSet = function () {
  this.map = new Map();
    this.arr = [];
    this.length = 0;
};


/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.map.has(val)) {
        return false;
    }
    this.map.set(val, this.length);
    this.arr.push(val);
    this.length++;
    return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (!this.map.has(val)) {
        return false;
    }
    let index = this.map.get(val);
    let last = this.arr[this.length - 1];
    this.arr[index] = last;
    this.map.set(last, index);
    this.arr.pop();
    this.map.delete(val);
    this.length--;
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    let random = Math.floor(Math.random() * this.length);
    return this.arr[random];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */