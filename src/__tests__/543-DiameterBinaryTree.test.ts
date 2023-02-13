import { listBinaryTreeBFS, makeBinaryTreeFromList } from "../lib.helper";
import f from "../problems/543-DiameterBinaryTree";

describe("main", () => {
  it("core", () => {
    const r1 = makeBinaryTreeFromList([1,2,3,4,5])
    const out1 = f(r1)
    expect(out1).toBe(3)

    const r2 = makeBinaryTreeFromList([1,2])
    const out2 = f(r2)
    expect(out2).toBe(1)

    const r3 = makeBinaryTreeFromList([
                        1,
      2,                              3,
      null,null,                      6,7,
      null,null,null,null,        8,9,null,null])
    const out3 = f(r3)
    expect(out3).toBe(4)
  });
});
