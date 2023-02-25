import { BinarySearchTree, BSTNode } from "./BST";
import { printInOrder } from "./BSTHelpers";
import { inOrder } from "./BSTTraversals";

describe("binary tree", () => {
  it("basic", () => {
    let a = new BinarySearchTree<number>();

    // success: root set to null on empty init
    expect(a.root).toBe(null);

    a.insert(1);

    // success: first insert is root
    expect(a.root?.key).toBe(1);
    // TODO check size, height, do search

    a.insert(2);
    expect(a.root?.right?.key).toBe(2);
  });

  it("search", () => {
    let a = new BinarySearchTree([5, 3, 1, 7, 10, 4]);
    const n1 = a.root?.left?.left;
    const n2 = a.root?.right?.right;
    const n3 = a.root?.left?.right;

    // success: search by passing key
    expect(a.searchByKey(1)).toBe(n1);
    expect(a.searchByKey(10)).toBe(n2);
    expect(a.searchByKey(4)).toBe(n3);

    // failure: return null
    expect(a.searchByKey(8888)).toBe(null);

    // success: search by passing node
    expect(a.search(n1 ?? null)).toBe(n1);
    expect(a.search(n2 ?? null)).toBe(n2);
    expect(a.search(n3 ?? null)).toBe(n3);

    // failure: return null
    expect(a.search(null)).toBe(null);
    expect(a.search({ key: 222 })).toBe(null);
  });

  it("min/max", () => {
    let a = new BinarySearchTree([5, 3, 1, 7, 10, 4]);

    // success: min/max nodes of tree
    expect(a.min()?.key).toBe(1);
    expect(a.max()?.key).toBe(10);

    // success: min/max nodes, when node is specified
    const nodeA = a.searchByKey(3);
    const nodeB = a.searchByKey(5);
    const nodeC = a.searchByKey(7);

    expect(a.min(nodeA)?.key).toBe(1);
    expect(a.min(nodeB)?.key).toBe(1);
    expect(a.min(nodeC)?.key).toBe(7);

    expect(a.max(nodeA)?.key).toBe(4);
    expect(a.max(nodeB)?.key).toBe(10);
    expect(a.max(nodeC)?.key).toBe(10);

    // success: search ay key, returns found node or null
    expect(a.searchByKey(7)).toBeTruthy();
    expect(a.searchByKey(7)?.key).toBe(7);
    expect(a.searchByKey(11111)).toBe(null);

    // success: min/max keys of tree
    expect(a.minForKey()).toBe(1);
    expect(a.maxForKey()).toBe(10);

    // success: min/max keys, from a node for a specified key
    expect(a.minForKey(3)).toBe(1);
    expect(a.minForKey(5)).toBe(1);
    expect(a.minForKey(7)).toBe(7);

    expect(a.maxForKey(3)).toBe(4);
    expect(a.maxForKey(5)).toBe(10);
    expect(a.maxForKey(7)).toBe(10);

    const falseNode = { key: 555 };

    // failure: min/max nodes, return null when node doesn't exist in tree
    expect(a.max(falseNode)).toBe(null);
    expect(a.min(falseNode)).toBe(null);

    // failure: min/max via key, return null when key doesn't exist in tree
    expect(a.maxForKey(456)).toBe(null);
    expect(a.minForKey(456)).toBe(null);
  });

  it("successor", () => {
    let a = new BinarySearchTree([5, 3, 1, 7, 10, 4]);

    let path: BSTNode<number>[] = [];
    inOrder(a?.root, (node) => path.push(node));
    let keys = path.map((x) => x.key);

    path.forEach((node, idx) => {
      // console.log(`node ${node.key} has a successor: ${keys[idx+1]}`, )
      expect(a.successor(node)?.key).toBe(keys[idx + 1]);
    });
  });

  it("predecessor", () => {
    let a = new BinarySearchTree([10, 5, 6, 20, 2, 40, 42, 29, 28, 1, 3, 4]);

    let path: BSTNode<number>[] = [];
    inOrder(a?.root, (node) => path.push(node));
    let keys = path.map((x) => x.key);

    path.forEach((node, idx) => {
      // console.log(`node ${node.key} has a predecessor: ${keys[idx-1]}`, )
      expect(a.predecessor(node)?.key).toBe(keys[idx - 1]);
    });
  });

  it("transplant", () => {
    let a = new BinarySearchTree([5, 3, 1, 7, 10, 4]);

    const n1 = a.searchByKey(3);
    const n2 = a.searchByKey(7);
    const n3 = a.searchByKey(10);
    a.transplant(n1 as BSTNode<number>, n2 as BSTNode<number>);

    // success: typical transplant
    expect(a.root?.left?.key).toBe(7);

    a.transplant(n3 as BSTNode<number>, n1 as BSTNode<number>);

    // success: typical transplant
    expect(a.root?.right?.right?.key).toBe(3);

    a.transplant(n2 as BSTNode<number>);

    // success: transplant/delete subtree
    expect(a.root?.left).toBe(undefined);

    a.transplant(a.root as BSTNode<number>);

    // success: transplant/delete root
    expect(a.root).toBe(null);
  });

  it("delete", () => {
    let a = new BinarySearchTree([5, 3, 1, 4, 7, 10, 8, 9]);

    const n1 = a.searchByKey(3);

    a.delete(n1 as BSTNode<number>);

    // success: node no longer in tree
    expect(a.search(n1)).toBe(null);

    let inOrderPath: number[] = [];
    inOrder(a.root, (node) => inOrderPath.push(node.key));

    // and verify replacement
    expect(inOrderPath[1]).toBe(4);

    a.delete(a.root as BSTNode<number>);

    inOrderPath = [];
    inOrder(a.root, (node) => inOrderPath.push(node.key));
    console.log(`inorderpath post delete of root`, inOrderPath);

    // success: root replaced by successor (where successor === root.right)
    expect(a.root?.key).toBe(7);

    a.delete(a.root as BSTNode<number>);

    // success: root replaced by successor (where successor !== root.right)
    expect(a.root?.key).toBe(8);

    inOrderPath = [];
    inOrder(a.root, (node) => inOrderPath.push(node.key));

    // verify new tree
    expect(inOrderPath).toStrictEqual([1, 4, 8, 9, 10]);
  });
});
