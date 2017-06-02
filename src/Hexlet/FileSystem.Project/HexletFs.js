const Tree = require('./Tree');
const Dir = require('./Dir');
const File = require('./File');

const getPathParts = path =>
  path.split('/').filter(part => part !== '');

module.exports = class {
  constructor() {
    this.tree = new Tree('/', new Dir('/'));
  }

  statSync(path) {
    const current = this.tree.getDeepChild(getPathParts(path));
    return current.getMeta().getStats();
  }

  touchSync(path) {
    const parts = getPathParts(path);
    const name = parts[parts.length - 1];
    const parent = this.tree.getDeepChild(parts.slice(0, -1));
    return parent.addChild(name, new File(name));
  }

  mkdirSync(path) {
    const parts = getPathParts(path);
    const name = parts[parts.length - 1];
    const parent = this.tree.getDeepChild(parts.slice(0, -1));
    return parent.addChild(name, new Dir(name));
  }
};
