// const File = require('./File');
// const Dir = require('./Dir');

export default class Stats {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    // const C = type === 'dir' ? Dir : File;
    // return new C(name);
    // check type os stats like build node
  }

  isDirectory(path) {
    if (path) {
      this.path = path;
    }
  }

  isFile(path) {
    if (path) {
      this.path = path;
    }
  }
}
// module.exports = Stats;
