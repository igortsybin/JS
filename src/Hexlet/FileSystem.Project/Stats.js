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
