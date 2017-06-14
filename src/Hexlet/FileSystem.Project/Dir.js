// import HexletFs from './HexletFs';
import Node from './Node';

export default class Dir extends Node {

  isDirectory() { // eslint-disable-line
    return true;
  }

  isFile() { // eslint-disable-line
    return false;
  }

}
// module.exports = Dir;
