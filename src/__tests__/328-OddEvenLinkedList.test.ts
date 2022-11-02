import { LLLister, LLMaker } from "../lib.helper";
import f from "../problems/328-OddEvenLinkedList";

describe("main", () => {
  it("core", () => {
    const outList1 = LLLister(f(LLMaker([1,2,3,4,5])[0]));
    expect(outList1).toStrictEqual([1,3,5,2,4]);

    const outList2 = LLLister(f(LLMaker([2,1,3,5,6,4,7])[0]));
    expect(outList2).toStrictEqual([2,3,6,7,1,5,4]);
  });
});
