import f from "../problems/709-ClimbingStairs";

describe("main", () => {
  it("core", () => {
    expect(f(2)).toBe(2);
    expect(f(3)).toBe(3);
    expect(f(6)).toBe(13);
  });
});
