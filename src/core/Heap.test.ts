import { HeapMax } from "./Heap";

describe("Heap", () => {
  it("basic", () => {
    const a = new HeapMax([1, 5, 2, 6, 4, 3]);
    expect(checkHeapMaxProperty(a.arr!)).toBe(true);
    a.print();

    const b = new HeapMax([1]);
    expect(checkHeapMaxProperty(b.arr!)).toBe(true);
    b.print();

    const c = new HeapMax([1, 2, 3, 4, 7, 8, 9, 10, 14, 16]);
    expect(checkHeapMaxProperty(c.arr!)).toBe(true);
    c.print();
  });

  it("extract", () => {
    const a = new HeapMax([1, 5, 2, 6, 4, 3]);

    expect(a.extract()).toBe(6);
    expect(checkHeapMaxProperty(a.arr!)).toBe(true);

    expect(a.extract()).toBe(5);
    expect(checkHeapMaxProperty(a.arr!)).toBe(true);
  });

  it("update", () => {
    const a = new HeapMax([1, 5, 2, 6, 4, 3]);
    a.update(4, 7);
    expect(a.peek()).toBe(7);
    expect(checkHeapMaxProperty(a.arr!)).toBe(true);

    const b = new HeapMax([1, 5, 2, 6, 4, 3]);

    b.update(5, 3);
    expect(b.arr[5]).toBe(3);

    b.update(5, 4);
    expect(b.arr[2]).toBe(4);
    expect(checkHeapMaxProperty(b.arr!)).toBe(true);
  });

  it("insert", () => {
    const a = new HeapMax([1, 5, 2, 6, 4, 3]);

    a.insert(7);
    expect(a.peek()).toBe(7);
    expect(checkHeapMaxProperty(a.arr!)).toBe(true);

    a.insert(-1);
    expect(a.arr[a.arr.length - 1]).toBe(-1);
    expect(checkHeapMaxProperty(a.arr!)).toBe(true);

    const b = new HeapMax<number>([]);

    b.insert(1);
    expect(b.peek()).toBe(1);

    b.insert(3);
    expect(b.peek()).toBe(3);

    b.insert(2);
    expect(b.peek()).toBe(3);

    expect(checkHeapMaxProperty(b.arr!)).toBe(true);
  });
});

export function checkHeapMaxProperty<T>(heap: T[]): boolean {
  for (let i = 0; i < heap.length; ++i) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (heap[left] > heap[i] || heap[right] > heap[i]) {
      return false;
    }
  }
  return true;
}
