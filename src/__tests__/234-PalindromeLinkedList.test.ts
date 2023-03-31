import { LLMaker } from "../lib.bst";
import f from "../problems/234-PalindromeLinkedList";

describe("main", () => {
  it("core", () => {
    const list1 = LLMaker([1]);
    const head1 = list1[0];
    const out1 = f(head1);
    expect(out1).toBe(true);

    expect(f(LLMaker([4, 4])[0])).toBe(true);
    expect(f(LLMaker([1, 2])[0])).toBe(false);
    expect(f(LLMaker([1, 2, 1])[0])).toBe(true);
    expect(f(LLMaker([1, 2, 3])[0])).toBe(false);
    expect(f(LLMaker([1, 2, 2, 1])[0])).toBe(true);
    expect(f(LLMaker([1, 2, 3, 1])[0])).toBe(false);
  });
});
