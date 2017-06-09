// const File = require('./File');
// const Dir = require('./Dir');
import HexletFs from './HexletFs';

export default class Stats {
  constructor(type) {
    this.type = type;
  }

  isDirectory() {
    return this.type === 'dir';
  }

  isFile() {
    return this.type === 'file';
  }
}
// module.exports = Stats;
