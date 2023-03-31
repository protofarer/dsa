import { makeBinaryTreeFromList } from "../lib.bst";
import f from "../problems/235-LowestCommonAncestorBST";

describe("main", () => {
  it("core", () => {
    const root1 = makeBinaryTreeFromList([
      6,
      2,
      8,
      0,
      4,
      7,
      9,
      null,
      null,
      3,
      5,
    ]);
    expect(
      f(
        root1,
        { val: 2, left: null, right: null },
        { val: 8, left: null, right: null }
      )?.val
    ).toBe(6);

    const root2 = makeBinaryTreeFromList([
      6,
      2,
      8,
      0,
      4,
      7,
      9,
      null,
      null,
      3,
      5,
    ]);
    expect(
      f(
        root2,
        { val: 2, left: null, right: null },
        { val: 4, left: null, right: null }
      )?.val
    ).toBe(2);

    const root3 = makeBinaryTreeFromList([2, 1]);
    expect(
      f(
        root3,
        { val: 2, left: null, right: null },
        { val: 1, left: null, right: null }
      )?.val
    ).toBe(2);
  });
});
