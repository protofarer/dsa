import f from "../problems/692-TopKFrequentWords";

describe("main", () => {
  it("core", () => {
    // expect(f(
    //   ["i","love","leetcode","i","love","coding"], 2
    // ))
    // .toStrictEqual(
    //   ["i", "love"]
    // );

    // expect(f(
    //   ["the","day","is","sunny","the","the","the","sunny","is","is"], 4
    // ))
    // .toStrictEqual(
    //   ["the","is","sunny","day"]
    // );

    expect(f(
      ["i","love","leetcode","i","love","coding"], 3
    ))
    .toStrictEqual(
      ["i","love","coding"]
    )
  });
});
