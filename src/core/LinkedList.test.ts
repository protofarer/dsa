import { Node, LinkedList } from "./LinkedList";

// TODO linked list maker, by specifying an array of values [v1, v2, v3]

describe("linked list", () => {
  it("empty instantiate", () => {
    // create empty list
    const a = new LinkedList();
    expect(a.head).toBe(null);
  });

  it("instantiation errors", () => {
    // fail: invalid argument
    expect(() => {
      new LinkedList({} as Node<number>);
    }).toThrow();

    // fail: invalid argument
    expect(() => {
      new LinkedList({ next: null } as Node<number>);
    }).toThrow();
  });

  it("instantiate with Array arg", () => {
    const b = new LinkedList([1]);
    // success: instantiate via array
    expect(b.head?.val).toBe(1);

    const c = new LinkedList([1, 2]);
    // success: instantiate via array
    expect(c.head?.val).toBe(1);
    expect(c.head?.next?.val).toBe(2);

    // fail: empty array is invalid
    expect(() => {
      new LinkedList([]);
    }).toThrow();
  });

  it("insert", () => {
    const a = new LinkedList();
    a.insert({ val: 999 } as Node<number>);

    // success: inserts in front of current head of list
    expect(a.head?.val).toBe(999);

    a.insert({ val: 10, next: null });

    // success
    expect(a.head?.val).toBe(10);
    expect(a.head?.next?.val).toBe(999);

    // fail: val must be non-null
    expect(() => a.insert({} as Node<number>)).toThrow();
  });

  it("delete", () => {
    const node = { val: 555, next: null };
    const a = new LinkedList([1, 2]);

    // no-op
    expect(a.delete({} as Node<number>)).toBe(null);

    a.insert(node);

    // success
    expect(a.delete(node)).toBe(node);
    expect(a.head?.val).toBe(1);
  });

  it("search", () => {
    const a = new LinkedList([5, 6, 7, 8]);
    const node = { val: 111, next: null };
    a.insert(node);

    // success: verified by looking at neighbors
    expect(a.search(111)).toBe(node);
    expect(a.search(111)?.next?.val).toBe(5);
    expect(a.search(777)).toBe(null);
  });

  it("insertByIndex", () => {
    const a = new LinkedList([1, 2]);
    const n1 = { val: 111, next: null };
    a.insertByIndex(n1, 1);
    let node: Node<number> | null | undefined = a.head;

    // success
    expect(node?.val).toBe(1);
    node = node?.next;
    expect(node?.val).toBe(111);
    expect(a.head?.next?.next?.val).toBe(2);

    const b = new LinkedList([1, 2]);
    const n2 = { val: 222, next: null };
    b.insertByIndex(n2, 5);

    // success: appends when idx > list's size
    expect(b.head?.next?.next?.val).toBe(222);
  });

  it("transform", () => {
    const a = new LinkedList(["a", "b", "c"]);
    const transformFn = (char: string) => char.charCodeAt(0);
    const aOut = a.transform(transformFn);
    let node = aOut?.head;

    // success: results in new value type
    expect(node?.val).toBe(97);
    node = node?.next;
    expect(node?.val).toBe(98);
    node = node?.next;
    expect(node?.val).toBe(99);

    const b = new LinkedList([1, 2, 3]);
    const transformFn2 = (x: number) => x * x;
    const bOut = b.transform(transformFn2);
    let node2 = bOut?.head;

    // success: results in same value type
    expect(node2?.val).toBe(1);
    node2 = node2?.next;
    expect(node2?.val).toBe(4);
    node2 = node2?.next;
    expect(node2?.val).toBe(9);
  });

  it("getByIndex", () => {
    const a = new LinkedList([1, 2, 3]);

    const aOut1 = a.getByIndex(0);
    // success
    expect(aOut1?.val).toBe(1);

    const aOut2 = a.getByIndex(2);
    // success
    expect(aOut2?.val).toBe(3);

    // error
    expect(() => a.getByIndex(3)).toThrow();

    // error
    expect(() => a.getByIndex(-1)).toThrow();

    const b = new LinkedList();

    // error
    expect(() => b.getByIndex(0)).toThrow();
  });

  it("deleteByIndex", () => {
    const a = new LinkedList([4, 5, 6]);

    const aOut1 = a.deleteByIndex(0);

    // success
    expect(aOut1?.val).toBe(4);

    const aOut2 = a.deleteByIndex(1);
    expect(aOut2?.val).toBe(6);

    // error
    expect(() => a.deleteByIndex(25)).toThrow();

    // error
    expect(() => a.deleteByIndex(-1)).toThrow();

    const aOut3 = a.deleteByIndex(0);
    expect(aOut3?.val).toBe(5);

    // no-op: empty list
    expect(a.deleteByIndex(0)).toBe(null);
  });

  it("reverse", () => {
    const a = new LinkedList([1, 2, 3, 4]);
    a.reverse();
    expect(a.head?.val).toBe(4);
    expect(a.head?.next?.val).toBe(3);
    expect(a.head?.next?.next?.val).toBe(2);
    expect(a.head?.next?.next?.next?.val).toBe(1);
  });
});
