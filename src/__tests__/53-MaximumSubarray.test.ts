  import f from "../problems/53-MaximumSubarray";

  describe("main", () => {
    it("core", () => {
      const a = [-2,1,-3,4,-1,2,1,-5,4];
      expect(f(a)).toBe(6);

      const b = [1];
      expect(f(b)).toBe(1);

      const c = [5,4,-1,7,8];
      expect(f(c)).toBe(23);
    });
  });
