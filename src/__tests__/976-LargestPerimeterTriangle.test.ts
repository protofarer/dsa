import f from "../problems/976-LargestPerimeterTriangle";

describe("main", () => {
  it("core", () => {
    expect(f([2,1,2])).toBe(5);
    expect(f([1,2,1])).toBe(0);
    expect(f([3,6,2,3])).toBe(8);
  });
});
