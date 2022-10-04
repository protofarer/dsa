import f from "../problems/876-MiddleLinkedList";
import { LLMaker } from "../lib";

describe("main", () => {
  it("core", () => {
    // linked list maker
    const a = [1,2,3,4,5];
    const A = LLMaker(a);
    expect(f(A[0])?.val).toBe(3);

    const b = [1,2,3,4,5,6];
    const B = LLMaker(b);
    expect(f(B[0])?.val).toBe(4);
  });
});