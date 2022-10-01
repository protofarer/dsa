import f from '../problems/205-IsomorphicStrings';

describe('main', () => {
  it('core', () => {
    expect(f("egg", "add")).toBe(true);
    expect(f("foo", "bar")).toBe(false);
    expect(f("paper", "title")).toBe(true);
  })
})