// path.parse('/home/user/dir/file.txt');
// Returns:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }

import path from 'path';
import Dir from './Dir';
import File from './File';
import Tree from './Tree';

console.log(path.parse('/home/user'));

const getPathParts = filepath =>
  filepath.split(path.sep).filter(part => part !== '');

export default class {
  constructor() {
    this.tree = new Tree('/', new Dir('/'));
  }
  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }

  statSync(filepath) {
    const current = this.findNode(filepath);
    if (!current) {
      return null;
    }
    return current.getMeta().getStats();
  }
  
  touchSync(filepath) {
    const { base, dir } = path.getPathParts(filepath);
    const parent = this.findNode(dir);
    if (!parent || parent.getMeta().getStats().isFile()) {
      return false;
    }
    return parent.addChild(base, new File(base));

    // const parts = getPathParts(filepath);
    // const name = parts[parts.length - 1];
    // const parent = this.tree.getDeepChild(parts.slice(0, -1));
    // return parent.addChild(name, new File(name));
  }

  mkdirSync(filepath) {
    const { base, dir } = path.parse(filepath);
    const parent = this.findNode(dir);
    if (!parent || parent.getMeta().getStats().isFile()) {
      return false;
    }
    return parent.addChild(base, new Dir(base));
    // const parts = getPathParts(filepath);
    // const name = parts[parts.length - 1];
    // const parent = this.tree.getDeepChild(parts.slice(0, -1));
    // return parent.addChild(name, new Dir(name));
  }
}
