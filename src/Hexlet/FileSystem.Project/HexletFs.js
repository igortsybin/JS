const Tree = require('./Tree');

// BEGIN (write your solution here)

function fromStrToArray(str) {
  return str.split('/').filter(value => value !== '');
}
// END

module.exports = class {
  constructor() {
    this.tree = new Tree('/', { type: 'dir' });
  }
  // BEGIN (write your solution here)
  isDirectory(path) {
    const inputPath = fromStrToArray(path);
    return this.tree.getDeepChild(inputPath) &&
    this.tree.getDeepChild(inputPath).getMeta().type === 'dir' &&
    (this.tree.getDeepChild(inputPath).key === inputPath[inputPath.length - 1]);
  }

  mkdirSync(path) {
    const pathArray = fromStrToArray(path);
    const pathNameWithoutLast = pathArray.slice(0, -1);
    const lastButOneElem = this.tree.getDeepChild(pathNameWithoutLast);
    lastButOneElem.addChild(pathArray[pathArray.length - 1], { type: 'dir' });
  }

  isFile(path) {
    const inputPath = fromStrToArray(path);
    return this.tree.getDeepChild(inputPath) &&
    this.tree.getDeepChild(inputPath).getMeta().type === 'file' &&
    (this.tree.getDeepChild(inputPath).key === inputPath[inputPath.length - 1]);
  }

  touchSync(path) {
    const pathName = fromStrToArray(path);
    const pathNameWithoutLast = pathName.slice(0, -1);
    const lastButOneElem = this.tree.getDeepChild(pathNameWithoutLast);
    lastButOneElem.addChild(pathName[pathName.length - 1], { type: 'file' });
  }
  // END
}
