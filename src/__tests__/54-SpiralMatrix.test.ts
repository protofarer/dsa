import f from "../problems/54-SpiralMatrix";

describe("main", () => {
  it("core", () => {
    expect(f([[1,2,3],[4,5,6],[7,8,9]]))
      .toStrictEqual([1,2,3,6,9,8,7,4,5]);

    expect(f([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))
      .toStrictEqual([1,2,3,4,8,12,11,10,9,5,6,7]);
  });
});
