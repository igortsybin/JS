// const HexletFs = require('./HexletFs');
// const Stats = require('./Stats');
import Stats from './Stats';
// const File = require('./File');

export default class Node {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  // return stats object:e.g. file.getStats().isFile ();
  getStats() {
    return this.stats;
    // return new Stats(this.isFile(), this.isDirectory());
  }
}

// module.exports = Node;

