import f from "../problems/509-FibonacciNumber";

describe("main", () => {
  it("core", () => {
    expect(f(2)).toBe(1);
    expect(f(3)).toBe(2);
    expect(f(4)).toBe(3);
  });
});
