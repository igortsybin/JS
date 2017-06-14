import Stats from './Stats';


export default class Node {
  constructor(name) {
    this.name = name;
    this.stats = new Stats(this.isFile(), this.isDirectory());
  }
  getName() {
    return this.name;
  }
  getStats() {
    return this.stats;
  }
}

// module.exports = Node;

