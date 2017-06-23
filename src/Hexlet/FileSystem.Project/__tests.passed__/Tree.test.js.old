const Tree = require('../Tree');

describe('Tree', () => {
  let tree;
  const treeTest = new Tree('/');
  beforeEach(() => {
    tree = new Tree('/');
    tree.addChild('var')
      .addChild('lib')
      .addChild('run');
    tree.addChild('etc');
    tree.addChild('home');
  });

  it('#hasChildren', () => {
    expect(tree.hasChildren()).toBeTruthy();
    expect(treeTest.hasChildren()).toBeFalsy();
  });

  it('#hasChild', () => {
    expect(tree.hasChild('/')).toBeFalsy();
    expect(tree.hasChild('etc')).toBeTruthy();
  });

  it('#getParent', () => {
    const subtree = tree.getChild('var');
    expect(subtree && subtree.getParent()).toEqual(tree);
  });

  it('#getChildren', () => {
    const dirs = tree.getChildren().map(child => child.getKey());
    expect(dirs).toEqual(['var', 'etc', 'home']);
  });

  it('#getChild', () => {
    const subtree = tree.getChild('var');
    expect(subtree && subtree.getKey()).toBe('var');
  });

  it('#getChild undefined', () => {
    const subtree = tree.getChild('undefined');
    expect(subtree).toBeUndefined(undefined);
  });

  it('#getDeepChild', () => {
    const subtree = tree.getDeepChild(['var', 'lib']);
    expect(subtree && subtree.getKey()).toBe('lib');
    const parent = subtree && subtree.getParent();
    expect(parent && parent.getKey()).toBe('var');
  });

  it('#getDeepChild undefined', () => {
    const subtree = tree.getDeepChild(['var', 'lib', 'one', 'two']);
    expect(subtree).toBeUndefined();
  });

  it('#removeChild', () => {
    const subtree = tree.getChild('var');
    subtree && subtree.removeChild('lib');
    expect(subtree && !subtree.hasChildren()).toBeTruthy();
  });
});
