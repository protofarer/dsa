import f from "../problems/844-BackspaceStringCompare";

describe("main", () => {
  it("core", () => {
    expect(f("ab#c", "ad#c")).toBe(true);
    expect(f("ab##", "c#d#")).toBe(true);
    expect(f("a#c", "b")).toBe(false);
  });
});
