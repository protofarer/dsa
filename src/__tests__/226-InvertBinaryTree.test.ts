import { listBinaryTreeBFS, makeBinaryTreeFromList } from "../lib.bst";
import f from "../problems/226-InvertBinaryTree";

describe("main", () => {
  it("core", () => {
    const rootInput = makeBinaryTreeFromList([4, 2, 7, 1, 3, 6, 9]);
    const expectedRoot = makeBinaryTreeFromList([4, 7, 2, 9, 6, 3, 1]);
    const expectedList = listBinaryTreeBFS(expectedRoot);

    const out = f(rootInput);
    const outList = listBinaryTreeBFS(out);

    expect(outList).toStrictEqual(expectedList);
  });
});
