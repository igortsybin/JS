// const File = require('./File');
// const Dir = require('./Dir');
import HexletFs from './HexletFs';

export default class Stats {
  constructor(type) {
    // this.name = name;
    this.type = type;
    // const C = type === 'dir' ? Dir : File;
    // return new C(name);
    // check type os stats like build node
  }

  isDirectory() {
    return this.type === 'dir';
  }

  isFile() { 
    return this.type === 'file';
  }
}
// module.exports = Stats;
