// const HexletFs = require('./HexletFs');
// const Stats = require('./Stats');
import Stats from './Stats';
// const File = require('./File');

export default class Node {
  constructor(name, stats) {
    this.name = name;
    this.stats = stats;
  }
  getName() {
    return this.name;
  }
  // return stats object:e.g. file.getStats().isFile ();
  getStats() {
    // return new Stats(this.isFile(), this.isDirectory());
  }
}

// module.exports = Node;

