import f from "../problems/1779-NearestPointSameXY";

describe("main", () => {
  it("core", () => {
    const a = [[1,2],[3,1],[2,4],[2,3],[4,4]];
    expect(f(3,4,a)).toBe(2);

    const b = [[3,4]];
    expect(f(3,4,b)).toBe(0);

    const c= [[2,3]];
    expect(f(3,4,c)).toBe(-1);
  });
});
