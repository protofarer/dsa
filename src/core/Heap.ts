import { BSTNode } from "./BST";

interface IHeap<T> {
  arr: T[] | null;
  insert: (key: T) => T | null;
  extract: () => T | null;
  delete: () => T | null;
  peek: () => T | null;
  update: (i: number, key: T) => void;
  isEmpty: () => boolean;
  size: () => number;
}

interface IHeapMax<T> extends IHeap<T> {
  heapType: "max";
  max: () => T | null;
  maxHeapify: (arr: T[], idx: number) => void;
  buildMaxHeapify: (arr: T[]) => T[] | null;
}

interface IHeapMin<T> extends IHeap<T> {
  heapType: "min";
  min: () => T | null;
  minHeapify: (arr: T[]) => T[] | null;
}

export class HeapMax<T> implements IHeapMax<T> {
  arr: T[] | null;
  heapType: "max" = "max";

  max: () => T | null = () => {
    throw Error("max is undefined for a min heap");
  };

  constructor(inputArr?: T[]) {
    if (inputArr && inputArr.length > 0) {
      // build-maxHeap logic
      this.arr = this.buildMaxHeapify(inputArr);
    } else {
      this.arr = null;
    }
  }

  insert(key: T): T | null {
    return null;
  }

  extract(): T | null {
    return null;
  }

  delete(): T | null {
    return null;
  }

  update(i: number, key: T): void {}

  peek(): T | null {
    return null;
  }

  size(): number {
    return 0;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  left(idx: number): number {
    return 2 * idx + 1;
  }

  right(idx: number): number {
    return 2 * idx + 1 + 1;
  }

  parent(idx: number): number {
    return Math.floor((idx + 1) / 2);
  }

  buildMaxHeapify<T>(arr: T[]): T[] | null {
    for (let i = Math.floor((arr.length - 2) / 2); i >= 0; --i) {
      this.maxHeapify(arr, i);
    }
    return arr;
  }

  maxHeapify<T>(arr: T[], i: number): void {
    let largest = i;
    const left = this.left(i);
    const right = this.right(i);

    if (arr[largest] < arr[this.left(i)]) {
      largest = left;
    }
    if (arr[largest] < arr[this.right(i)]) {
      largest = right;
    }
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      this.maxHeapify(arr, largest);
    }
  }

  print<T>(inputArr?: T[]): void {
    let arr = inputArr || this.arr;
    if (arr) {
      let s = "";
      const h = Math.floor(Math.log2(arr.length));
      for (let l = 0; l <= h; ++l) {
        const nLeadingSpaces = Math.pow(2, h - l);
        s += `l:${l}` + " ".repeat(nLeadingSpaces);
        for (let i = 0; i <= l; ++i) {
          const x = arr?.[Math.pow(2, l) + i - 1];
          s += x >= 10 ? x + " " : " " + x + "  ";
        }
        s += "\n";
      }
      console.log(s);
    }
  }

  static merge<T>(heapA: HeapMax<T>, heapB: HeapMax<T>): HeapMax<T> {
    return new HeapMax<T>();
  }
}
