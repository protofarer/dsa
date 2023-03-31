import { makeBinaryTreeFromList } from "../lib.bst";
import f from "../problems/102-BinaryTreeLevelOrderTraversal";

describe("main", () => {
  it("incomplete tree", () => {
    const list = [3, 9, 20, null, null, 15, 7];
    const root = makeBinaryTreeFromList(list);
    const path = f(root);
    expect(path).toStrictEqual([[3], [9, 20], [15, 7]]);
  });

  it("single node", () => {
    const list = [1];
    const root = makeBinaryTreeFromList(list);
    const path = f(root);
    expect(path).toStrictEqual([[1]]);
  });

  it("single node", () => {
    const list = [null];
    const root = makeBinaryTreeFromList(list);
    const path = f(root);
    expect(path).toStrictEqual([]);
  });
});
