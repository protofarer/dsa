import binaryTreeLevelOrderTraversal from "../problems/102-BinaryTreeLevelOrderTraversal";
import { makeBinaryTreeFromList, printBFSPath } from "../lib.helper";
import f from "../problems/98-ValidateBinarySearchTree";

describe("main", () => {
  it("core", () => {
    const root1 = makeBinaryTreeFromList([2,1,3]);
    expect(f(root1)).toBe(true);

    const root2 = makeBinaryTreeFromList([5,1,4,null,null,3,6]);
    expect(f(root2)).toBe(false);

    const root3 = makeBinaryTreeFromList([5,4,6,null,null,3,7]);
    expect(f(root3)).toBe(false);

    const root4 = makeBinaryTreeFromList([32,26,47,19,null,null,56,null,27]);
    expect(f(root4)).toBe(false);
  });
});
