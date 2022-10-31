import f from "../problems/43-MultiplyStrings";

describe("main", () => {
  it("core", () => {
    expect(f("2", "3")).toBe("6");
    expect(f("15", "6")).toBe("90");
    expect(f("123", "456")).toBe("56088");
    expect(f("9","9")).toBe("81");
    expect(f("9133", "0")).toBe("0");
    expect(f("123456789", "987654321"))
      .toBe("121932631112635269");
  });
});
