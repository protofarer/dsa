import f from "../problems/1706-WhereWillBallFall";

describe("main", () => {
  it("core", () => {
    expect(f([[1,1,1,-1,-1],[1,1,1,-1,-1],[-1,-1,-1,1,1],[1,1,1,1,-1],[-1,-1,-1,-1,-1]]))
      .toStrictEqual([1,-1,-1,-1,-1]);

    expect(f([[-1]])).toStrictEqual([-1]);

    expect(f([[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1],[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1]]))
      .toStrictEqual([0,1,2,3,4,-1]);
  });
});
