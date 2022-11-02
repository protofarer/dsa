import f from "../problems/2131-LongestPalindromeConcatenatingTwoLetterWords";

describe("main", () => {
  it("core", () => {
    // expect(f(["lc","cl","gg"])).toBe(6);
    // expect(f(["ab","ty","yt","lc","cl","ab"])).toBe(8);
    // expect(f(["cc","ll","xx"])).toBe(2);
    expect(f(["qo","fo","fq","qf","fo","ff","qq","qf","of","of","oo","of","of","qf","qf","of"])).toBe(14);

  });
});


[
  "oo",

  "fo",
  "fo",
  "of",
  "of",

  "fq",
  "qf",




  "ff",
  "qq",

  "qo",

  "qf",
  "qf",
  "qf",

  "of",
  "of",
  "of",
];
