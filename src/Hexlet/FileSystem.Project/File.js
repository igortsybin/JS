// import HexletFs from './HexletFs';
import Node from './Node';

export default class File extends Node {
  constructor(name, body) {
    super(name);
    this.body = body;
  }
  getBody() {
    return this.body;
  }

  isDirectory() { // eslint-disable-line
    return false;
  }

  isFile() { // eslint-disable-line
    return true;
  }
}

