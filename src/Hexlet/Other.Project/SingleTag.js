const Node = require('./Node');

class SingleTag extends Node {
  constructor(name = '', attributes = {}, body = '', children = []) {
    super(name, attributes);
    this.body = body;
    this.children = children;
  }

  toString() {
    return `<${this.getName()}${this.getAttributesAsLine()}>`;
  }
}

module.exports = SingleTag;
