export default class Stats {
  constructor(file, dir) {
    this.dir = dir;
    this.file = file;
    // this.type = type;
  }

  isDirectory() {
    return this.dir;
  }

  isFile() {
    return this.file;
  }
}
