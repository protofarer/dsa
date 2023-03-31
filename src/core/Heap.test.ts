import { HeapMax } from "./Heap";

describe("Heap", () => {
  it("basic", () => {
    const a = new HeapMax([1, 5, 2, 6, 4, 3]);
    expect(checkHeapMax(a.arr!)).toBe(true);

    const b = new HeapMax([1]);
    expect(checkHeapMax(b.arr!)).toBe(true);
  });
});

export function checkHeapMax<T>(heap: T[]): boolean {
  for (let i = 0; i < heap.length; ++i) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (heap[left] > heap[i] || heap[right] > heap[i]) {
      return false;
    }
  }
  return true;
}
