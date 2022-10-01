import f from '../problems/392-IsSubsequence';

describe('main', () => {
  it('core', () => {
    expect(f("abc", "ahbgdc")).toBe(true);
    expect(f("axc", "ahbgdc")).toBe(false);
    expect(f("aaaaaa", "bbaaaa")).toBe(false);
  })
})