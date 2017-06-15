import path from 'path';
import Tree from 'hexlet-trees'; // eslint-disable-line
import { Dir, File } from 'hexlet-fs'; // eslint-disable-line
// import Tree from './Tree';

const getPathParts = filepath =>
  filepath.split('/').filter(part => part !== '');

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
  mkdirpSync(filepath) {
    let flag = true;
    const parts = getPathParts(filepath);
    parts.reduce((subtree, dir) => {
      const currentChild = subtree.getChild(dir);
      if (!currentChild) {
        return subtree.addChild(dir, new Dir(dir));
      }
      if (!currentChild.getMeta().getStats().isDirectory()) {
        flag = false; // we should break somehow
      }
      return currentChild;
    }
          , this.tree);
    return flag;
  }

  touchSync(filepath) {
    const { base, dir } = path.parse(filepath);
    const parent = this.findNode(dir);
    if (!parent || !parent.getMeta().getStats().isDirectory()) {
      return false;
    }
    parent.addChild(base, new File(base));
    return true;
  }

  mkdirSync(filepath) {
    const { base, dir } = path.parse(filepath);
    const parent = this.findNode(dir);
    if (!parent || parent.getMeta().getStats().isFile()) {
      return false;
    }
    return parent.addChild(base, new Dir(base));
  }

  readdirSync(filepath) {
    const current = this.findNode(filepath);
    if (!current || current.getMeta().getStats().isFile()) {
      return false;
    }
    const result = current.getChildren().map(elem => elem.key);
    // console.log(result);
    return result;
  }

  rmdirSync(filepath) {
    const { base } = path.parse(filepath);
    const current = this.findNode(filepath);
    if (!current
    || current.hasChildren()
    || current.getMeta().getStats().isFile()) {
      return false;
    }
    return current.getParent().removeChild(base);
  }


// Returns:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }
}
