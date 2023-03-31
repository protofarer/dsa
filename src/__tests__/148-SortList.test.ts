import { LLLister, LLMaker } from "../lib.bst";
import f from "../problems/148-SortList";

describe("main", () => {
  it("core", () => {
    // expect(LLLister(f(LLMaker([4,2,1,3])[0]))).toStrictEqual([1,2,3,4]);
    // expect(LLLister(f(LLMaker([-1,5,3,4,0])[0]))).toStrictEqual([-1,0,3,4,5]);
    expect(LLLister(f(LLMaker([])[0]))).toStrictEqual([]);
  });
});
