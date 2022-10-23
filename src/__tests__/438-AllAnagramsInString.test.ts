import f from "../problems/438-AllAnagramsInString";

describe("main", () => {
  it("core", () => {
    const result1 = f("cbaebabacd","abc")
    expect(result1.length).toBe(2);
    expect(result1).toContain(0);
    expect(result1).toContain(6);

    const result2 = f("abab", "ab")
    expect(result2.length).toBe(3);
    expect(result2).toContain(0);
    expect(result2).toContain(1);
    expect(result2).toContain(2);
  });
});