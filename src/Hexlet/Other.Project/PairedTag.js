const Node = require('./Node');

class PairedTag extends Node {
  constructor(name = '', attributes = {}, body = '', children = []) {
    super(name, attributes);
    this.body = body;
    this.children = children;
  }

  toString() {
    const childrenToString = this.children.length > 0 ? this.children.map( child => `${child.toString()}`).join('') : '';
    return `<${this.getName()}${this.getAttributesAsLine()}>${this.body}${childrenToString}</${this.getName()}>`;
  }
}

module.exports = PairedTag;
