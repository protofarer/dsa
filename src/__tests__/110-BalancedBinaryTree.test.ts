import { listBinaryTreeBFS, makeBinaryTreeFromList } from "../lib.bst";
import f from "../problems/110-BalancedBinaryTree";

describe("main", () => {
  it("core", () => {
    const r1 = makeBinaryTreeFromList([3, 9, 20, null, null, 15, 7]);
    expect(f(r1)).toBe(true);

    const r2 = makeBinaryTreeFromList([1, 2, 2, 3, 3, null, null, 4, 4]);
    expect(f(r2)).toBe(false);

    const r3 = makeBinaryTreeFromList([
      1,
      2,
      2,
      3,
      null,
      null,
      3,
      4,
      null,
      null,
      null,
      null,
      null,
      null,
      4,
    ]);
    const list3 = listBinaryTreeBFS(r3);
    expect(f(r3)).toBe(false);

    const r4 = makeBinaryTreeFromList([
      1,
      2,
      null,
      3,
      null,
      null,
      null,
      4,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ]);
    const list4 = listBinaryTreeBFS(r4);
    expect(f(r4)).toBe(false);
  });
});
