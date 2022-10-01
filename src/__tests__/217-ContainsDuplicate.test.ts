  import f from "../problems/217-ContainsDuplicate";

  describe("main", () => {
    it("core", () => {
      const n = [1,2,3,1];
      expect(f(n)).toBe(true);

      const m = [1,2,3,4];
      expect(f(m)).toBe(false);

      const p = [1,1,1,3,3,4,3,2,4,2];
      expect(f(p)).toBe(true);
    });
  });
