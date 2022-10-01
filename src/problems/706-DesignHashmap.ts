// leetcode spec
// - numeric keys
// - numeric values

export default class MyHashMap {
  list: Array<number | null>;

  constructor() {
    this.list = new Array();
  }

  put(key: number, value: number): void {
    this.list[key] = value;
  }

  get(key: number): number {
    if (this.list[key] != null) {
      return this.list[key] as number;
    }
    return -1;
  }

  remove(key: number): void {
    if (this.list[key]) {
      this.list[key] = null;
    }
  }
}