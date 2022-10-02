  import f from "../problems/278-FirstBadVersion";

  describe("main", () => {
    it("core", () => {
      const isBadVersion = (x: number) => (n: number) => n >= x;

      const isBad4 = isBadVersion(4)
      expect(f(isBad4)(5)).toBe(4);

      const isBad1 = isBadVersion(1);
      expect(f(isBad1)(2)).toBe(1);

      expect(f(isBad1)(3)).toBe(1);
    });
  });
