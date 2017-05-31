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
    // const children = this.children.values();
    // const input = Array.from(children);
    // return input;
    return [...this.children.values()];
  }

  removeChild(key) {
    this.children.delete(key);
    return this;
  }

  hasChildren() {
    return this.children.size > 0;
  }

  getDeepChild(keys) {
    // keys === ['var', 'lib']
    // console.log(this);
    return keys.reduce((acc, key) => acc && acc.getChild(key), this);
  }
  // END
}

module.exports = Tree;
