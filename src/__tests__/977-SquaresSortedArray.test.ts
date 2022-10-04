import f from "../problems/977-SquaresSortedArray";

describe("main", () => {
  it("core", () => {
    const a = [-4,-1,0,3,10];
    expect(f(a)).toStrictEqual([0,1,9,16,100]);

    const b = [-7,-3,2,3,11];
    expect(f(b)).toStrictEqual([4,9,9,49,121]);
  });
});
