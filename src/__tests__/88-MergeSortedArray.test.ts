import f from "../problems/88-MergeSortedArray";

describe("main", () => {
  it("core", () => {
    const a1 = [1,2,3,0,0,0];
    const m = 3;
    const a2 = [2,5,6];
    const n = 3;
    f(a1,m,a2,n);
    expect(a1).toStrictEqual([1,2,2,3,5,6]);

    const b1 = [1];
    const o = 1;
    const b2: number[] = [];
    const p = 0;
    f(b1,o,b2,p);
    expect(b1).toStrictEqual([1]);

    const c1 = [0];
    const q = 0;
    const c2 = [1];
    const r = 1;
    f(c1,q,c2,r);
    expect(c1).toStrictEqual([1]);
  });
});
