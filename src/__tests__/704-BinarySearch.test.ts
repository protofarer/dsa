  import f from "../problems/704-BinarySearch";

  describe("main", () => {
    it("core", () => {
      const a = [-1,0,3,5,9,12];

      let target = 9;
      expect(f(a, target)).toBe(4);

      target = 2;
      expect(f(a, target)).toBe(-1);
    });

    it("target is first element", () => {
      const a = [-100,0,3,5,9,12];
      let t = -100;
      expect(f(a, t)).toBe(0);
    });

    it("target is last element", () => {
      const a = [-100,0,3,5,9,12];
      let t = 12;
      expect(f(a, t)).toBe(5);
    });

    it("target is out of max value", () => {
      const a = [-100,0,3,5,9,12];
      let t = 13;
      expect(f(a, t)).toBe(-1);
    });

    it("target is below min value", () => {
      const a = [-100,0,3,5,9,12];
      let t = -999;
      expect(f(a, t)).toBe(-1);
    });
  });
