import f from "../problems/733-FloodFill";

describe("main", () => {
  it("core", () => {
    const image1 = [[1,1,1],[1,1,0],[1,0,1]];
    expect(f(image1, 1, 1, 2)).toStrictEqual([[2,2,2],[2,2,0],[2,0,1]]);

    const image2 = [[0,0,0],[0,0,0]];
    expect(f(image2, 0, 0, 0)).toStrictEqual([[0,0,0],[0,0,0]]);

    const image3 = [
      [0,0,0],
      [1,0,0]
    ];
    expect(f(image3, 1, 0, 2)).toStrictEqual([[0,0,0],[2,0,0]]);
  });
});
