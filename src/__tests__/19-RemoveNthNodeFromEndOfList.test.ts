import { LLLister, LLMaker } from "../lib.bst";
import f from "../problems/19-RemoveNthNodeFromEndOfList";

describe("main", () => {
  it("core", () => {
    const list1 = LLMaker([1, 2, 3, 4, 5]);
    const head1 = list1[0];
    const out1 = f(head1, 2); // returns head of modified LL
    const show1 = LLLister(out1);
    expect(show1).toStrictEqual([1, 2, 3, 5]);

    const list2 = LLMaker([1]);
    const head2 = list2[0];
    const out2 = f(head2, 1);
    const show2 = LLLister(out2);
    expect(show2 ?? []).toStrictEqual([]);

    const list3 = LLMaker([1, 2]);
    const head3 = list3[0];
    const out3 = f(head3, 1);
    const show3 = LLLister(out3);
    expect(show3 ?? []).toStrictEqual([1]);
  });
});
