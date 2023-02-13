import { Node, LinkedList } from "../LinkedList";

// TODO linked list maker, by specifying an array of values [v1, v2, v3]

describe("linked list", () => {
  it("empty instantiate", () => {
    // create empty list
    const a = new LinkedList();
    expect(a.head).toBe(null);

    // create empty list
    const b = new LinkedList([]);
    expect(b.head).toBe(null);

    // fail: invalid argument
    expect(() => {
      new LinkedList({} as Node);
    }).toThrow();

    // fail: invalid argument
    expect(() => {
      new LinkedList({ next: null } as Node);
    }).toThrow();
  });
  it("instantiate with Array arg", () => {
    const a = new LinkedList([]);
    expect(a.head).toBe(null);

    const b = new LinkedList([1]);
    expect(b.head?.val).toBe(1);

    const c = new LinkedList([1, 2]);
    expect(c.head?.val).toBe(2);
    expect(c.head?.next?.val).toBe(1);
  });
  it("insert", () => {
    const a = new LinkedList();
    a.insert({ val: 999 } as Node);
    expect(a.head?.val).toBe(999);
    a.insert({ val: 10, next: null });
    expect(a.head?.val).toBe(10);
    expect(a.head?.next?.val).toBe(999);

    expect(() => a.insert({} as Node)).toThrow();
  });
  it("delete", () => {
    const node = { val: 555, next: null };
    const a = new LinkedList([2, 1]);
    expect(a.delete({} as Node)).toBe(null);

    a.insert(node);
    expect(a.delete(node)).toBe(node);
    expect(a.head?.val).toBe(1);
  });
  it("search", () => {
    const a = new LinkedList([5, 6, 7, 8]);
    const node = { val: 111, next: null };
    a.insert(node);
    expect(a.search(111)).toBe(node);
    expect(a.search(111)?.next?.val).toBe(8);
    expect(a.search(777)).toBe(null);
  });
});
