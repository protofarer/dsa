import f from "../problems/746-MinCostClimbingStairs";

describe("main", () => {
  it("core", () => {
    const a = [10,15,20];
    expect(f(a)).toBe(15);

    const b = [1,100,1,1,1,100,1,1,100,1];
    expect(f(b)).toBe(6);

    const c = [0,1,2,2];
    expect(f(c)).toBe(2);

  });
});
