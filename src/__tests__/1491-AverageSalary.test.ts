  import f from "../problems/1491-AverageSalary";

  describe("main", () => {
    it("core", () => {
      const s = [4000,3000,1000,2000];
      expect(f(s)).toBe(2500);

      const r = [1000,2000,3000];
      expect(f(r)).toBe(2000);
    });
  });
