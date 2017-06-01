const Tree = require('./Tree');

// BEGIN (write your solution here)
function slashReplacer(str) {
  return str.trim().replace(/\//gi, '');
}

function fromStrToArray(str) {
  return str.split('/').filter(value => value !== '');
}
// END

module.exports = class {
  constructor() {
    this.tree = new Tree('/', { type: 'dir' });
  }
  // BEGIN (write your solution here)
  isDirectory(dir) {
    const inputDir = fromStrToArray(dir);
    // console.log(inputDir);
    return this.tree.hasChildren &&
    this.tree.getMeta.type === 'dir' &&
    this.tree.getDeepChild(inputDir);
    // const checkDir = this.tree.getChild(dir).
    // const checkDir = this.tree.getChild(dir).getMeta().type.trim() === 'dir';
    // const dirName = checkDir && slashReplacer(this.tree.getKey().trim());
    // console.log(`${dirName} === ${slashReplacer(dir)}`);
    // return dirName === slashReplacer(dir);
  }

  mkdirSync(dir) {
    const newDir = new Tree(dir, 'dir', this);
    this.tree.children.set(dir, newDir);
    return newDir;
  }
  // END
}
