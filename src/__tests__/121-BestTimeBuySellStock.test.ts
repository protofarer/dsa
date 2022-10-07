import f from "../problems/121-BestTimeBuySellStock";

describe("main", () => {
  it("core", () => {
    const a = [7,1,5,3,6,4];
    expect(f(a)).toBe(5);

    const b = [7,6,4,3,1];
    expect(f(b)).toBe(0);

    const c = [2,4,1];
    expect(f(c)).toBe(2);

    const d = [3,2,6,5,0,3];
    expect(f(d)).toBe(4);
  });
});
