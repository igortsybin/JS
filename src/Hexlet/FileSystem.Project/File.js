// import HexletFs from './HexletFs';
import Node from './Node';
import Stats from './Stats';
// const Node = require('./Node');

export default class File extends Node {
  constructor(name) {
    super(name);
    this.stats = new Stats('file');
  }
}

