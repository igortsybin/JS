class Node {
  constructor(name, ...args) {
    this.name = name;
    // this.args = args.map(elem => elem.toString());
    this.args = args;
  }
}

module.exports.Node = Node;
const obj = new Node('Igor', [8, 3, 1988]);
console.log(`${obj.name} ${obj.args[0].join('.')}`);
