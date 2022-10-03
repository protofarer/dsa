  import f from "../problems/1-TwoSum";

  describe("main", () => {
    it("core", () => {
      const a = [2,7,11,15];
      expect(f(a,9)).toStrictEqual([0,1]);

      const b = [3,2,4];
      expect(f(b,6)).toStrictEqual([1,2]);

      const c = [3,3];
      expect(f(c,6)).toStrictEqual([0,1]);
    });
  });
