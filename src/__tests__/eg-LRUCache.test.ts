import LRUCache from '../sandbox/eg-LRUCache';

describe('LRU Cache tests', () => {
  let lc: LRUCache;

  it('basic op', () => {
    lc = new LRUCache(2);
    lc.put(1, 100);
    lc.put(2,200);

    expect(lc.get(1)).toBe(100);

    lc.put(3,999);
    expect(lc.get(3)).toBe(999);
    expect(lc.get(2)).toBe(-1);
  });
})