// import HexletFs from './HexletFs';
import Node from './Node';
import Stats from './Stats';

export default class Dir extends Node {
  constructor(name) {
    super(name);
    this.stats = new Stats({ type: 'dir' });
  }

}
// module.exports = Dir;
