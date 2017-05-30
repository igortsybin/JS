
class Node {
  constructor(name, attr) {
    this.name = name;
    this.attr = attr;
  }
  getName() {
    return this.name;
  }
  getAttributesAsLine() {
    return Object.keys(this.attr).reduce((acc, key) => {
      return acc += ` ${key}="${this.attr[key]}"`;
    }, '');
  }
}
module.exports = Node;
