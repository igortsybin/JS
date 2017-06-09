import Stats from './Stats';


export default class Node {
  constructor(name, type) {
    this.name = name;
    this.stats = new Stats(type);
  }
  getName() {
    return this.name;
  }
  getStats() {
    return this.stats;
  }
}

// module.exports = Node;

