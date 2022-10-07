import { makeBinaryTreeFromList, printBFSPath } from './lib';
import binaryTreeLevelOrderTraversal from './problems/102-BinaryTreeLevelOrderTraversal';

describe('List to Tree Transformer', () => {
  it('simple complete', () => {
    const list = [1,2,3,4,5,6,7];
    const root = makeBinaryTreeFromList(list);
    expect(root?.left?.val).toBe(2);
    expect(root?.right?.right?.val).toBe(7);
  });

  it('null input', () => {
    const root = makeBinaryTreeFromList([]);
    expect(root).toBe(null);
  })

  it('tree with leftside gap', () => {
    const list = [1,2,3,null,null,6,7];
    const root = makeBinaryTreeFromList(list);
    expect(root?.left?.left).toBe(null);
    expect(root?.left?.right).toBe(null);
    expect(root?.right?.left?.val).toBe(6);
  });

  it('tree with middle gap', () => {
    const list = [1,2,3,4,null,null,7];
    const root = makeBinaryTreeFromList(list);
    expect(root?.left?.right).toBe(null);
    expect(root?.right?.left).toBe(null);
  });
});

describe('BFS Path Printer', () => {
  it('small complete tree', () => {
    const list = [1,2,3,4,5,6,7];
    const root = makeBinaryTreeFromList(list);

    const path = binaryTreeLevelOrderTraversal(root);
    const pathstring = printBFSPath(path)
    console.log(`BFS path`, pathstring)

  });

  it('unbalanced', () => {
    // specify a tree using a list
    // make tree from list
    // print made tree
    const list = [3,9,20,null,null,15,7];
    const root = makeBinaryTreeFromList(list);
  
    expect(root?.left?.val).toBe(9);
    expect(root?.right?.val).toBe(20);
    expect(root?.right?.left?.val).toBe(15);
    expect(root?.right?.right?.val).toBe(7);
  });

  it('large complete tree', () => {
    const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const root = makeBinaryTreeFromList(list);
    console.log(`input list:`, list)
  
    // make a BFS traversal path
    const path = binaryTreeLevelOrderTraversal(root);
    const pathstring = printBFSPath(path)
    console.log(`BFS path`, pathstring)
  
    expect(root?.left?.left?.left?.val).toBe(8);
    expect(root?.right?.right?.right?.val).toBe(15);
    expect(root?.right?.right?.left?.val).toBe(14);
  });
  

})
