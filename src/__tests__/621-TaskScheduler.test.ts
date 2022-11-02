import f from "../problems/621-TaskScheduler";

describe("main", () => {
  it("core", () => {
    expect(f(["A","A","A","B","B","B"], 2)).toBe(8)
    expect(f(["A","A","A","B","B","B"], 0)).toBe(6);
    expect(f(["A","A","A","A","A","A","B","C","D","E","F","G"], 2))
      .toBe(16);
    expect(f(["A","A","A"], 2)).toBe(7);
    expect(f(["A","B","C","C","C","D","D","E"], 1)).toBe(8);
  });
});
