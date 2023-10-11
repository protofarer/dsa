import { BSTNode } from "./BST";

interface IHeap<T> {
  arr: T[];
  heapType: "max" | "min";
  insert: (key: T) => void;
  extract: () => T | null;
  delete: () => T | null;
  peek: () => T | null;
  update: (i: number, key: T) => void;
  isEmpty: () => boolean;
  size: () => number;
  buildHeapify: (arr: T[]) => T[] | null;
  maxHeapify: (arr: T[], idx: number) => void;
}

export class HeapMax<T> implements IHeap<T> {
  arr: T[] = [];
  heapType: IHeap<T>["heapType"] = "max";

  constructor(inputArr?: T[]) {
    if (inputArr && inputArr.length > 0) {
      // build-maxHeap logic
      this.arr = this.buildHeapify(inputArr);
    } else {
      this.arr = [];
    }
  }

  peek(): T | null {
    return this.arr[0];
  }

  extract(): T | null {
    if (this.arr.length === 0) throw Error("Heap underflow");
    const max = this.peek();
    this.arr[0] = this.arr[this.arr.length - 1];
    this.arr.pop();
    this.maxHeapify(this.arr, 0);
    return max;
  }

  update(idx: number, key: T): void {
    if (key < this.arr[idx]) throw Error("New key is smaller than current key");
    this.arr[idx] = key;
    let i = idx;

    // sifts up, restoring maxheap property
    while (i > 0 && this.arr[this.parent(i)] < this.arr[i]) {
      //       console.log(`i=${i} is ${this.arr[i]};
      // p_i=${this.parent(i)} is ${this.arr[this.parent(i)]}`);

      [this.arr[i], this.arr[this.parent(i)]] = [
        this.arr[this.parent(i)],
        this.arr[i],
      ];
      i = this.parent(i);
    }
  }

  insert(key: T): void {
    this.arr?.push(key); // though update assigns key itself, this is for type safety
    this.update(this.arr.length - 1, key);
  }

  delete(): T | null {
    return null;
  }

  size(): number {
    return this.arr.length;
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
    return Math.floor((idx + 1) / 2) - 1;
  }

  buildHeapify<T>(inputArr: T[]): T[] {
    const arr = [...inputArr];
    if (arr) {
      for (let i = this.getLastNonLeafIdx(arr); i >= 0; --i) {
        this.maxHeapify(arr, i);
      }
    }
    return arr;
  }

  getLastNonLeafIdx<T>(inputArr?: T[]): number {
    const arr = inputArr || this.arr;
    if (arr) {
      return Math.floor((arr.length - 2) / 2);
    }
    return -1;
  }

  // sifts down, used for restoring maxheapproperty for given subtree
  maxHeapify<T>(arr: T[], idx: number): void {
    let largest = idx;
    const left = this.left(idx);
    const right = this.right(idx);

    if (arr[largest] < arr[this.left(idx)]) {
      largest = left;
    }
    if (arr[largest] < arr[this.right(idx)]) {
      largest = right;
    }
    if (largest !== idx) {
      [arr[idx], arr[largest]] = [arr[largest], arr[idx]];
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
        s += `l:${l}` + "  ".repeat(nLeadingSpaces);
        for (let i = 0; i <= l; ++i) {
          const x = arr?.[Math.pow(2, l) + i - 1];
          s +=
            x >= 10
              ? x + " ".repeat(h - l + 1)
              : " " + x + "  ".repeat(h - l + 1);
          if (i % 2 === 1 && l > 1) s += "_";
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
