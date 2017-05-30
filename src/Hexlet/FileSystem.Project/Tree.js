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
    return this.children[Symbol.iterator]();
  }

  removeChild(key) {
    this.children.delete(key);
    return this.children;
  }

  hasChildren() {
    console.log(this.children);
    return this.children ? true : false;
  }
  // END
}

module.exports = Tree;
