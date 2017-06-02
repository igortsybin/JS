// const HexletFs = require('./HexletFs');
const Stats = require('./Stats');
// const File = require('./File');

module.exports = class Node {
  constructor(name, stats) {
    this.name = name;
    this.stats = stats;
  }
  getName() {
    return this.name;
  }
  getStats() {
    return this.stats;
  }
};
