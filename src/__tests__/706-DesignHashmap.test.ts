import MyHashMap from '../problems/706-DesignHashmap';

describe('hashmap tests', () => {
  let hm: MyHashMap;
  beforeEach(() => {
    hm = new MyHashMap();
  });

  it('get values', () => {
    hm.put(1,1);
    hm.put(2,2);
    
    expect(hm.get(1)).toBe(1);
    expect(hm.get(3)).toBe(-1);
  });

  it('remove value', () => {
    hm.put(1,1);
    hm.put(2,2);
    hm.remove(1);
    expect(hm.get(1)).toBe(-1);
  });

  it('leetcode test1', () => {
    hm.put(1,1);
    hm.put(2, 2);
    hm.get(1);
    expect(hm.get(3)).toBe(-1);
    hm.put(2, 1)
    expect(hm.get(2)).toBe(1);
    hm.remove(2);
    expect(hm.get(2)).toBe(-1);
  });
})