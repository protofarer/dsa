  import f from "../problems/704-BinarySearch";

  describe("main", () => {
    it("core", () => {
      const a = [-1,0,3,5,9,12];
      let target = 9;
      expect(f(a, target)).toBe(4);

      target = 2;
      expect(f(a, target)).toBe(-1);

    });
  });
