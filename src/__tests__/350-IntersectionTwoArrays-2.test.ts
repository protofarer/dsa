import f from "../problems/350-IntersectionTwoArrays-2";

describe("main", () => {
  it("core", () => {
    expect(f([1,2,2,1],[2,2])).toStrictEqual([2,2]);
    expect(f([4,9,5],[9,4,9,8,4])).toStrictEqual([4,9]);
    expect(f([4,7,9,7,6,7],[5,0,0,6,1,6,2,2,4])).toStrictEqual([4,6]);
  });
});
