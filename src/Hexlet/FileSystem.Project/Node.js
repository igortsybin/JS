// const HexletFs = require('./HexletFs');
// const Stats = require('./Stats');
// const File = require('./File');

class Node {
  constructor(name, stats) {
    this.name = name;
    this.stats = stats;
  }
  getName() {
    return this.name;
  }
  // return stats object:e.g. file.getStats().isFile ();
  getStats() {
    return this.stats;
  }
}

module.exports = Node;

