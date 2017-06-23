import path from 'path';
import errors from 'errno'; // eslint-disable-line
import Tree from 'hexlet-trees'; // eslint-disable-line
import { Dir, File } from 'hexlet-fs'; // eslint-disable-line

import HexletFsError from './HexletFsError';

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
      throw new HexletFsError(errors.code.ENOENT, filepath);
    }
    return current.getMeta().getStats();
  }
  // Returns:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }
  copySync(src, dest) {
    const currentDest = this.findNode(dest);
    const body = this.readFileSync(src); // body

    // if dest it's a path to a folder, then a name of a file gets from src
    if (currentDest && currentDest.getMeta().getStats().isDirectory()) {
      const { base } = path.parse(src); // name of a file from src
      const fullPath = path.posix.join(dest, base);
      // console.log(fullPath);
      return this.writeFileSync(fullPath, body);
    }
    // if dest it's path to file (existed or not) than his body = src's body
    return this.writeFileSync(dest, body);
  }

  mkdirpSync(filepath) {
    getPathParts(filepath).reduce((subtree, part) => {
      const current = subtree.getChild(part);
      if (!current) {
        return subtree.addChild(part, new Dir(part));
      }
      if (current.getMeta().isFile()) {
        throw new HexletFsError(errors.code.ENOTDIR, filepath);
      }

      return current;
    }, this.tree);
  }

  touchSync(filepath) {
    const { dir, base } = path.parse(filepath);
    const parent = this.findNode(dir);
    if (!parent) {
      throw new HexletFsError(errors.code.ENOENT, filepath);
    }
    if (parent.getMeta().isFile()) {
      throw new HexletFsError(errors.code.ENOTDIR, filepath);
    }
    return parent.addChild(base, new File(base, ''));
  }

  unlinkSync(filepath) {
    const { base } = path.parse(filepath);
    const current = this.findNode(filepath);
    if (!current) {
      throw new HexletFsError(errors.code.ENOENT, filepath);
    }
    if (current.getMeta().getStats().isDirectory()) {
      throw new HexletFsError(errors.code.EPERM, filepath);
    }
    return [current.getParent().removeChild(base), null];
  }

  writeFileSync(filepath, body) {
    const { dir, base } = path.parse(filepath);
    const parent = this.findNode(dir);
    if (!parent) {
      throw new HexletFsError(errors.code.ENOENT, filepath);
    }
    const current = parent.getChild(base);
    if (current && current.getMeta().isDirectory()) {
      throw new HexletFsError(errors.code.EISDIR, filepath);
    }
    parent.addChild(base, new File(base, body));
  }

  readFileSync(filepath) {
    const current = this.findNode(filepath);
    if (!current) {
      throw new HexletFsError(errors.code.ENOENT, filepath);
    }
    if (current.getMeta().isDirectory()) {
      throw new HexletFsError(errors.code.EISDIR, filepath);
    }
    return current.getMeta().getBody();
  }

  mkdirSync(dirpath) {
    const { base, dir } = path.parse(dirpath);
    const parent = this.findNode(dir);
    if (!parent || parent.getMeta().getStats().isFile()) {
      return false;
    }
    return parent.addChild(base, new Dir(base));
  }

  readdirSync(filepath) {
    const dir = this.findNode(filepath);
    if (!dir) {
      return [null, errors.code.ENOENT];
    } else if (dir.getMeta().isFile()) {
      return [null, errors.code.ENOTDIR];
    }
    return [dir.getChildren().map(child => child.getKey()), null];
  }

  rmdirSync(dirpath) {
    const { base } = path.parse(dirpath);
    const current = this.findNode(dirpath);
    if (!current
    || current.hasChildren()
    || current.getMeta().getStats().isFile()) {
      return false;
    }
    return current.getParent().removeChild(base);
  }
}
