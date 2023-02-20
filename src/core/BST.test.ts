import { BinarySearchTree, BSTNode } from "./BST";
import { printInOrder } from "./BSTHelpers";

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

    let b = new BinarySearchTree([5, 3, 1, 7, 10, 4]);

    printInOrder(b);
    // success: min and max
    expect(b.min()).toBe(1);
    expect(b.max()).toBe(10);

    // success: search by key, returns found node or null
    expect(b.search(7)).toBeTruthy();
    expect(b.search(7)?.key).toBe(7);
    expect(b.search(11111)).toBe(null);
  });
});
