import f from "../problems/141-LinkedListCycle";
import { LLMaker } from "../lib.bst";

describe("main", () => {
  it("core", () => {
    const a = [3, 2, 0, -4];
    const A = LLMaker(a);
    A[3].next = A[1];
    expect(f(A[0])).toBe(true);

    const b = [1, 2];
    const B = LLMaker(b);
    B[1].next = B[0];
    expect(f(B[0])).toBe(true);

    const c = [1];
    const C = LLMaker(c);

    expect(f(C[0])).toBe(false);

    const d = [
      -21, 10, 17, 8, 4, 26, 5, 35, 33, -7, -16, 27, -12, 6, 29, -12, 5, 9, 20,
      14, 14, 2, 13, -24, 21, 23, -21, 5,
    ];
    const D = LLMaker(d);
    expect(f(D[0])).toBe(false);
  });
});
