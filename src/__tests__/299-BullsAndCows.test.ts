import f from "../problems/299-BullsAndCows";

describe("main", () => {
  it("core", () => {
    expect(f("1807", "7810")).toBe("1A3B");
    expect(f("1123", "0111")).toBe("1A1B");
    expect(f("11", "10")).toBe("1A0B");
  });
});
