class Tree {
  constructor(key, meta, parent) {
    this.parent = parent;
    this.key = key;
    this.meta = meta;
    this.children = new Map();
  }

  getKey() {
    return this.key;
  }

  getMeta() {
    return this.meta;
  }

  addChild(key, meta) {
    const child = new Tree(key, meta, this);
    this.children.set(key, child);

    return child;
  }

  getChild(key) {
    return this.children.get(key);
  }

  // BEGIN (write your solution here)
  // /var/lib/run
  // /etc

  hasChild(key) {
    return this.children.has(key);
  }

  getParent() {
    return this.parent;
  }

  getChildren() {
    // const arr = Array.from(this.children.entries());
    const input = this.children.entries();
    const arr = Object.keys(input).map((key) => {key, input(key)});
    console.log(arr);
    return arr;
    // return this.children[Symbol.iterator]();
  }

  removeChild(key) {
    this.children.delete(key);
    return this;
  }

  hasChildren() {
    return !(this.children.size === 0);
  }
  // END
}

module.exports = Tree;
