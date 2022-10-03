  import f from "../problems/35-SearchInsertPosition";

  describe("main", () => {
    it("core", () => {
      const a = [1,3,5,6];
      expect(f(a, 5)).toBe(2);
      expect(f(a, 2)).toBe(1);
      expect(f(a, 7)).toBe(4);

      const b = [1];
      expect(f(b, 1)).toBe(0);
    });
  });
