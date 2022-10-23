import f from "../problems/424-LongestRepeatingCharacterReplacement";

describe("main", () => {
  it("core", () => {
    expect(f("ABAB", 2)).toBe(4);
    expect(f("AABABBA", 1)).toBe(4);
  });
});
