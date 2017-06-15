import path from 'path';
import errors from 'errno'; // eslint-disable-line
import Tree from 'hexlet-trees'; // eslint-disable-line
import { Dir, File } from 'hexlet-fs'; // eslint-disable-line


const getPathParts = filepath =>
  filepath.split(path.posix.sep).filter(part => part !== '');

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
    return getPathParts(filepath).reduce((subtree, part) => {
      if (!subtree) {
        return false;
      }
      const current = subtree.getChild(part);
      if (!current) {
        return subtree.addChild(part, new Dir(part));
      }
      if (current.getMeta().getStats().isFile()) {
        return false;
      }

      return current;
    }, this.tree);
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
}
