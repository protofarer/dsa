import f from "../problems/14-LongestCommonPrefix";

describe("main", () => {
  it("core", () => {
    expect(f(["flower","flow","flight"])).toBe("fl");
    expect(f(["dog","racecar","car"])).toBe("");
  });
});
